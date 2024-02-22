import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { StorageService } from '../storage/storage.service';
import { Prisma } from '@prisma/client';
import { CreateFileOptions } from './file.type';
import { pick } from 'lodash';
import { PrismaService } from '@api/prisma/prisma.service';
import { FileType } from '@api/types';

@Injectable()
export class FileService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly storageService: StorageService
  ) {}

  create(args: Prisma.FileCreateArgs) {
    return this.prismaService.file.create(args);
  }

  async delete(args: Prisma.FileDeleteArgs) {
    const file = await this.prismaService.file.delete(args);
    if (file) {
      await this.storageService.delete(file.storageId);
    }
    return true;
  }

  uploadUrl(name?: string) {
    return this.storageService.uploadUrl(name);
  }

  async createFromStorageId(id: string, options?: CreateFileOptions) {
    try {
      let storageFile: FileType;
      if (options?.folder) {
        storageFile = await this.storageService.move(id, options.folder);
      } else {
        storageFile = await this.storageService.getInfo(id);
      }
      if (storageFile) {
        return this.create({
          data: {
            url: storageFile.url,
            storageId: storageFile.public_id,
            metadata: pick(storageFile, [
              'format',
              'resource_type',
              'bytes',
              'height',
              'width',
            ]),
            ...(options?.data || {}),
          },
        });
      }
      throw new HttpException('Store not found.', HttpStatus.NOT_FOUND);
    } catch (error) {
      throw new HttpException(
        error?.message ?? 'Internal server.',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async createFromUrl(url: string, options?: CreateFileOptions) {
    const storageFile = await this.storageService.download(url);
    return this.createFromStorageId(storageFile.public_id, options);
  }
}

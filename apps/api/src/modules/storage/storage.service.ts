import { FileType } from '@api/types';
import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class StorageService {
  abstract uploadUrl(name?: string): Promise<string>;
  abstract getInfo(id: string): Promise<FileType>;
  abstract move(id: string, folder: string): Promise<FileType>;
  abstract download(url: string): Promise<FileType>;
  abstract delete(id: string): Promise<boolean>;
}

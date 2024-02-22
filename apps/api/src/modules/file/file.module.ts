import { Module } from '@nestjs/common';
import { FileService } from './file.service';
import { FileResolver } from './file.resolver';
import { StorageModule } from '../storage/storage.module';
import { PrismaModule } from '@api/prisma/prisma.module';

@Module({
  imports: [PrismaModule, StorageModule.forRoot()],
  providers: [FileResolver, FileService],
  exports: [FileService],
})
export class FileModule {}

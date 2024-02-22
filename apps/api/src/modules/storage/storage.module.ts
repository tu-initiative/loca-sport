import { DynamicModule, Module } from '@nestjs/common';
import { StorageService } from './storage.service';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { CloudinaryService } from './cloudinary/cloudinary.service';

@Module({})
export class StorageModule {
  static forRoot(): DynamicModule {
    return {
      module: CloudinaryModule,
      providers: [
        {
          provide: StorageService,
          useClass: CloudinaryService,
        },
      ],
      exports: [StorageService],
    };
  }
}

import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { v2 } from 'cloudinary';
import { CloudinaryService } from './cloudinary.service';
import { AppConfig } from '@api/configs/type';

@Module({
  providers: [
    CloudinaryService,
    {
      provide: 'CLOUDINARY',
      useFactory: () => {
        const configService = new ConfigService<AppConfig>();
        return v2.config({
          cloud_name: configService.get('CLOUDINARY_NAME'),
          api_key: configService.get('CLOUDINARY_API_KEY'),
          api_secret: configService.get('CLOUDINARY_API_SECRET'),
          cloudinary_domain: configService.get('CLOUDINARY_DOMAIN'),
        });
      },
    },
  ],
  exports: [CloudinaryService],
})
export class CloudinaryModule {}

import { AppConfig } from '@api/configs/type';
import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Prisma, PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient<Prisma.PrismaClientOptions, 'query'>
  implements OnModuleInit
{
  constructor(private readonly configService: ConfigService<AppConfig>) {
    super({
      log: [
        {
          emit: 'event',
          level: 'query'
        },
        {
          emit: 'stdout',
          level: 'error'
        },
        {
          emit: 'stdout',
          level: 'info'
        },
        {
          emit: 'stdout',
          level: 'warn'
        }
      ]
    });
    if (this.configService.get('DATABASE_LOG') === 'true') {
      this.$on('query', (e) => {
        console.log('<====== [Prisma Query] =====>\n', e, '\n');
      });
    }
  }

  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('query', async () => {
      await app.close();
    });
  }
}

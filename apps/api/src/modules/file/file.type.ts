import { ArgsType, Field } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

export class FileUploadUrlArgs {
  name?: string;
}

export type CreateFileOptions = {
  folder?: string;
  data?: Prisma.FileCreateArgs['data'];
};

@ArgsType()
export class FileArgs {
  @Field()
  name: string;
}

@ArgsType()
export class CreateFromUrlArgs {
  @Field()
  url: string;
}

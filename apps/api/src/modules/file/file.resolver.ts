import { File } from '@api/@generated';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { FileService } from './file.service';
import { FileArgs } from './file.type';

@Resolver(() => File)
export class FileResolver {
  constructor(private readonly fileService: FileService) {}

  @Query(() => String)
  getUploadUrl(@Args() args: FileArgs) {
    return this.fileService.uploadUrl(args.name);
  }
}

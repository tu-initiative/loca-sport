import {
  ArgumentsHost,
  Catch,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { GqlArgumentsHost, GqlExceptionFilter } from '@nestjs/graphql';
import { GraphQLError } from 'graphql';

@Catch(HttpException)
export class HttpExceptionFilter implements GqlExceptionFilter {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  async catch(exception: HttpException, host: ArgumentsHost) {
    const gqlHost = GqlArgumentsHost.create(host);
    const statusCode = exception.getStatus();
    const statusText = HttpStatus[statusCode];

    const contextType = String(gqlHost.getType());
    if (contextType === 'graphql') {
      const message = exception.getResponse() as string;
      const error = new GraphQLError(message, {
        extensions: {
          code: statusText,
          statusCode: statusCode,
          message: message,
        },
      });
      return error;
    }
    const error = new GraphQLError('Internal server.', {
      extensions: {
        code: HttpStatus[500],
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Internal server.',
      },
    });
    return error;
  }
}

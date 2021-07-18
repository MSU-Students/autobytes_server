import { Controller, Get, Post, Query, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Response } from 'express';
import { Media } from 'src/schemas/Media.schema';
import { MediaService } from './media.service';

@Controller('media')
export class MediaController {
    constructor(private mediaService: MediaService) { }
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        schema: {
          type: 'object',
          properties: {
            file: {
              type: 'string',
              format: 'binary',
            },
          },
        },
      })
    @UseInterceptors(FileInterceptor('file'))
    @ApiOperation({ summary: 'Upload some media', operationId: 'UploadMedia' })
    @ApiResponse({ status: 201, type: Media })
    @Post('/create')
    async create(@UploadedFile('file') file: Express.Multer.File):Promise<Media> {
        return this.mediaService.create({
            filename: file.filename,
            content: file.buffer.toString('base64'),
            mimeType: file.mimetype
        });
    }

    @ApiOperation({ summary: 'Get Media by id', operationId: 'GetMedia' })
    @ApiResponse({ status: 200, type: Media })
    @Get('id')
    async findById(@Query('id') id: string, @Res() res: Response): Promise<any> {
        const media = await this.mediaService.findById(id);
        const buffer = Buffer.from(media.content, 'base64');
        res.type(media.mimeType).send(buffer);
    }
}

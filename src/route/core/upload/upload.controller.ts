// src/upload/upload.controller.ts
import { Controller, Post, UploadedFile, UseInterceptors, StreamableFile, Get, Logger, Res  } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadService } from './upload.service';
@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadUpload(@UploadedFile() file: Express.Multer.File, @Res() res: any) {
    const data = await this.uploadService.upload(file);
    res.json({url: data.Location  })
    
  }

  @Post('uploadS3')
  @UseInterceptors(FileInterceptor('file'))
  uploadS3 () {

  }

}



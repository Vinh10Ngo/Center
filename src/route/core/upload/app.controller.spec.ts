import { Test, TestingModule } from '@nestjs/testing';
import { UploadController } from './upload.controller';
import { UploadService } from './upload.service';

describe('uploadsController', () => {
  let uploadsController: UploadController;

  beforeEach(async () => {
    const uploads: TestingModule = await Test.createTestingModule({
      controllers: [UploadController],
      providers: [UploadService],
    }).compile();

    uploadsController = uploads.get<UploadController>(UploadController);
  });
});

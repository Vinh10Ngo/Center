import { Controller, Get, Post, Body, Param, Delete, Put, Query, UploadedFile, UseInterceptors, Res } from '@nestjs/common';
import { ExpenditureService } from './expenditure.service';
import { Expenditure } from './schemas/expenditure.schema';
import { CreateExpenditureDto } from './dto/create-expenditure.dto';
import { UpdateExpenditureDto } from './dto/update-expenditure.dto'; // Assuming you have an UpdateExpenditureDto
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadService } from '../../core/upload/upload.service';


@Controller('expenditure')
export class ExpenditureController {
  constructor(
    private readonly expenditureService: ExpenditureService,
    private readonly uploadService: UploadService
  ) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async create(@Body() createExpenditureDto: CreateExpenditureDto, @UploadedFile() file: Express.Multer.File, @Res() res: any): Promise<Expenditure> {
    const data = await this.uploadService.upload(file);
    const expenditure = new Expenditure();
    expenditure.percentForSchool = createExpenditureDto.percentForSchool;
    expenditure.percentForPrincipal = createExpenditureDto.percentForPrincipal;
    expenditure.device = createExpenditureDto.device;
    expenditure.salary = createExpenditureDto.salary;
    expenditure.expenditureArray = createExpenditureDto.expenditureArray;
    expenditure.image = data.Location
    const json = this.expenditureService.create(expenditure);
    return this.expenditureService.create(expenditure);
  }

  @Get()
  async findAll(@Query() query: any): Promise<Expenditure[]> {
    return this.expenditureService.findAll(query);
  }
  @Get(':id') // Define route parameter ':id'
  async findById(@Param('id') id: string): Promise<Expenditure> {
    return this.expenditureService.findById(id);
  }
  @Delete(':id') // Define route parameter ':id'
  async deleteById(@Param('id') id: string): Promise<void> {
    await this.expenditureService.delete(id);
  }
  @Put(':id')
  async editById(@Param('id') id: string, @Body() updateExpenditureDto: UpdateExpenditureDto): Promise<Expenditure> {
    return this.expenditureService.update(id, updateExpenditureDto);
  }
  @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    async uploadUpload(@UploadedFile() file: Express.Multer.File, @Res() res: any) {
      const data = await this.uploadService.upload(file);
      res.json({url: data.Location  })
  }
}


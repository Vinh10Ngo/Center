import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ExpenditureService } from './expenditure.service';
import { Expenditure } from './schemas/expenditure.schema';
import { CreateExpenditureDto } from './dto/create-expenditure.dto';
import { UpdateExpenditureDto } from './dto/update-expenditure.dto'; // Assuming you have an UpdateExpenditureDto



@Controller('expenditure')
export class ExpenditureController {
  constructor(private readonly expenditureService: ExpenditureService) {}

  @Post()
  async create(@Body() createExpenditureDto: CreateExpenditureDto): Promise<Expenditure> {
    const expenditure = new Expenditure();
    expenditure.percentForSchool = createExpenditureDto.percentForSchool;
    expenditure.percentForPrincipal = createExpenditureDto.percentForPrincipal;
    expenditure.device = createExpenditureDto.device;
    expenditure.salary = createExpenditureDto.salary;
    expenditure.expenditureArray = createExpenditureDto.expenditureArray;
    return this.expenditureService.create(expenditure);
  }

  @Get()
  async findAll(): Promise<Expenditure[]> {
    return this.expenditureService.findAll();
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
}


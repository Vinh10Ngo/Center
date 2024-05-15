import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { SchoolService } from './school.service';
import { School } from './schemas/school.schema';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto'; // Assuming you have an UpdateSchoolDto



@Controller('school')
export class SchoolController {
  constructor(private readonly schoolService: SchoolService) {}

  @Post()
  async create(@Body() createSchoolDto: CreateSchoolDto): Promise<School> {
    const school = new School();
    school.name = createSchoolDto.name;
    school.role = createSchoolDto.role;
    school.studentId = createSchoolDto.studentId;
    return this.schoolService.create(school);
  }

  @Get()
  async findAll(): Promise<School[]> {
    return this.schoolService.findAll();
  }
  @Get(':id') // Define route parameter ':id'
  async findById(@Param('id') id: string): Promise<School> {
    return this.schoolService.findById(id);
  }
  @Delete(':id') // Define route parameter ':id'
  async deleteById(@Param('id') id: string): Promise<void> {
    await this.schoolService.delete(id);
  }
  @Put(':id')
  async editById(@Param('id') id: string, @Body() updateSchoolDto: UpdateSchoolDto): Promise<School> {
    return this.schoolService.update(id, updateSchoolDto);
  }
}


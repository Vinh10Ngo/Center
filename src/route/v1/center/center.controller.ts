import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CenterService } from './center.service';
import { Center } from './schemas/center.schema';
import { CreateCenterDto } from './dto/create-center.dto';
import { UpdateCenterDto } from './dto/update-center.dto'; // Assuming you have an UpdateCenterDto



@Controller('center')
export class CenterController {
  constructor(private readonly centerService: CenterService) {}

  @Post()
  async create(@Body() createCenterDto: CreateCenterDto): Promise<Center> {
    const center = new Center();
    center.name = createCenterDto.name;
    center.fee = createCenterDto.fee;
    center.code = createCenterDto.code;
    center.instructor = createCenterDto.instructor;
    center.isDiscount = createCenterDto.isDiscount;
    center.discountPercent = createCenterDto.discountPercent;
    center.description = createCenterDto.description;
    center.studentId = createCenterDto.studentId;
    center.centerId = createCenterDto.centerId;
    center.studentArray = createCenterDto.studentArray;
    center.schoolId = createCenterDto.schoolId;
    return this.centerService.create(center);
  }

  @Get()
  async findAll(): Promise<Center[]> {
    return this.centerService.findAll();
  }
  @Get(':id') // Define route parameter ':id'
  async findById(@Param('id') id: string): Promise<Center> {
    return this.centerService.findById(id);
  }
  @Delete(':id') // Define route parameter ':id'
  async deleteById(@Param('id') id: string): Promise<void> {
    await this.centerService.delete(id);
  }
  @Put(':id')
  async editById(@Param('id') id: string, @Body() updateCenterDto: UpdateCenterDto): Promise<Center> {
    return this.centerService.update(id, updateCenterDto);
  }
}


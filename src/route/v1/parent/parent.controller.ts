import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ParentService } from './parent.service';
import { Parent } from './schemas/parent.schema';
import { CreateParentDto } from './dto/create-parent.dto';
import { UpdateParentDto } from './dto/update-parent.dto'; // Assuming you have an UpdateParentDto
import { StudentService } from '../student/student.service'
import { Types } from 'mongoose'
 
@Controller('parent')
export class ParentController {
  constructor(private readonly parentService: ParentService, private readonly studentService: StudentService) {}

  @Post()
  async create(@Body() createParentDto: CreateParentDto): Promise<Parent> {
    const parent = new Parent();
    parent.name = createParentDto.name;
    parent.email = createParentDto.email;
    parent.phone = createParentDto.phone;
    parent.address = createParentDto.address;
    return this.parentService.create(parent);
  }
  @Post('createExcel')
   async createExcel(): Promise<any>  {
    const data = await this.studentService.importExcel();
    const response : any[]= [];
    const obj = {
      name: "",
      email: "",
      phone: "", 
      address: ""
    }
    
    for (let i = 6; i <= 11; i++) {
      console.log(data[i]);
      obj.phone = data[i].__EMPTY_3
      await this.parentService.create(obj);
      response[i-6] = obj
    }
    return response;
  }

  @Get()
  async findAll(): Promise<Parent[]> {
    return this.parentService.findAll();
  }
  @Get(':id') // Define route parameter ':id'
  async findById(@Param('id') id: string): Promise<Parent> {
    return this.parentService.findById(id);
  }
  @Delete(':id') // Define route parameter ':id'
  async deleteById(@Param('id') id: string): Promise<void> {
    await this.parentService.delete(id);
  }
  @Put(':id')
  async editById(@Param('id') id: string, @Body() updateParentDto: UpdateParentDto): Promise<Parent> {
    return this.parentService.update(id, updateParentDto);
  }
}


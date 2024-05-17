import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './schemas/student.schema';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto'; // Assuming you have an UpdateStudentDto
import { Types } from 'mongoose'
import { BaseModulesService } from '../../baseModule/baseModule.service'


@Controller('student')
export class StudentController {
  constructor(
    private readonly studentService: StudentService,
    private readonly baseService: BaseModulesService
  ) {}

  @Post()
  async create(@Body() createStudentDto : CreateStudentDto): Promise<Student> {
    
    return this.studentService.create(createStudentDto);
  }

  @Post('createExcel')
  async createExcel(): Promise<any> {
    let dataInDb = await this.studentService.findAll()
    const data = await this.baseService.importExcel()
    const response: any[] = []
    const obj: any = {
      name: "",
      age: 0,
      birthday: " ",
      // phone: " ",
      grade: " ",
      address: " ",
      parentId: new Types.ObjectId,
      classId: new Types.ObjectId,
      role: " ",
      schoolId: new Types.ObjectId,
      info: {}
    }
    const keysToRemove = ['__EMPTY', '__EMPTY_1', '__EMPTY_3'];
    for (let i = 6; i <= 20; i++) {
      const copiedItem = { ...data[i] };
      const info = await this.studentService.removeKeys(copiedItem, keysToRemove);
      obj.name = data[i].__EMPTY
      obj.birthday = data[i].__EMPTY_1
      obj.info = info
      var foundIndex: number = dataInDb.findIndex((x: any) => x.name === obj.name);
      if(foundIndex !== -1){
        
        await this.studentService.update(dataInDb[foundIndex]._id.toString() ,obj)
      } else{
        await this.create(obj)
      }
      };  
      response.push(obj)   
      
      return response;
  }


  @Get()
  async findAll(): Promise<Student[]> {
    return this.studentService.findAll();
  }

  @Get('excel')
  async exportData(): Promise<any> {
    return this.baseService.importExcel();
  }
  @Get(':id') // Define route parameter ':id'
  async findById(@Param('id') id: string): Promise<Student> {
    return this.studentService.findById(id);
  }
  @Delete(':id') // Define route parameter ':id'
  async deleteById(@Param('id') id: string): Promise<void> {
    await this.studentService.delete(id);
  }
  @Put(':id')
  async editById(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto): Promise<Student> {
    return this.studentService.update(id, updateStudentDto);
  }
 
}


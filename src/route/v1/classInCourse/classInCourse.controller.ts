import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ClassInCourseService } from './classInCourse.service';
import { ClassInCourse } from './schemas/classInCourse.schema';
import { CreateClassInCourseDto } from './dto/create-classInCourse.dto';
import { UpdateClassInCourseDto } from './dto/update-classInCourse.dto'; // Assuming you have an UpdateClassInCourseDto



@Controller('classInCourse')
export class ClassInCourseController {
  constructor(private readonly classInCourseService: ClassInCourseService) {}

  @Post()
  async create(@Body() createClassInCourseDto: CreateClassInCourseDto): Promise<ClassInCourse> {
    const classInCourse = new ClassInCourse();
    classInCourse.name = createClassInCourseDto.name;
    classInCourse.code = createClassInCourseDto.code;
    classInCourse.instructor = createClassInCourseDto.instructor;
    classInCourse.schedule = createClassInCourseDto.schedule;
    classInCourse.courseId = createClassInCourseDto.courseId;
    classInCourse.studentId = createClassInCourseDto.studentId;
    return this.classInCourseService.create(classInCourse);
  }

  @Get()
  async findAll(): Promise<ClassInCourse[]> {
    return this.classInCourseService.findAll();
  }
  @Get(':id') // Define route parameter ':id'
  async findById(@Param('id') id: string): Promise<ClassInCourse> {
    return this.classInCourseService.findById(id);
  }
  @Delete(':id') // Define route parameter ':id'
  async deleteById(@Param('id') id: string): Promise<void> {
    await this.classInCourseService.delete(id);
  }
  @Put(':id')
  async editById(@Param('id') id: string, @Body() updateClassInCourseDto: UpdateClassInCourseDto): Promise<ClassInCourse> {
    return this.classInCourseService.update(id, updateClassInCourseDto);
  }
}


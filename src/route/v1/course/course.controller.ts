import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CourseService } from './course.service';
import { Course } from './schemas/course.schema';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto'; // Assuming you have an UpdateCourseDto



@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Post()
  async create(@Body() createCourseDto: CreateCourseDto): Promise<Course> {
    const course = new Course();
    course.name = createCourseDto.name;
    course.fee = createCourseDto.fee;
    course.code = createCourseDto.code;
    course.instructor = createCourseDto.instructor;
    course.isDiscount = createCourseDto.isDiscount;
    course.discountPercent = createCourseDto.discountPercent;
    course.description = createCourseDto.description;
    course.studentId = createCourseDto.studentId;
    course.centerId = createCourseDto.centerId;
    course.studentArray = createCourseDto.studentArray;
    course.schoolId = createCourseDto.schoolId;
    return this.courseService.create(course);
  }

  @Get()
  async findAll(): Promise<Course[]> {
    return this.courseService.findAll();
  }
  @Get(':id') // Define route parameter ':id'
  async findById(@Param('id') id: string): Promise<Course> {
    return this.courseService.findById(id);
  }
  @Delete(':id') // Define route parameter ':id'
  async deleteById(@Param('id') id: string): Promise<void> {
    await this.courseService.delete(id);
  }
  @Put(':id')
  async editById(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto): Promise<Course> {
    return this.courseService.update(id, updateCourseDto);
  }
}


import { Injectable } from '@nestjs/common';
import { StudentRepository } from './student.repository';
import { Student, StudentDocument } from './schemas/student.schema';
import * as XLSX from 'xlsx';
import { CreateStudentDto } from './dto/create-student.dto';

@Injectable()
export class StudentService {
  constructor(private readonly studentRepository: StudentRepository) {}

  async findAll(): Promise<StudentDocument[]> {
    return this.studentRepository.findAll();
  }

  async findById(studentId: string): Promise<StudentDocument | null> {
    return this.studentRepository.findById(studentId);
  }

  async create(student: CreateStudentDto): Promise<StudentDocument> {
    return this.studentRepository.create(student);
  }

  async update(studentId: string, updateData: Partial<Student>): Promise<StudentDocument | null> {
    return this.studentRepository.update(studentId, updateData);
  }

  async delete(studentId: string): Promise<StudentDocument | null> {
    return this.studentRepository.delete(studentId);
  }
  
  async importExcel(){
    try {
      const file = XLSX.readFile('./1.xlsx') 
  
    let data = [] 
      
    const sheets = file.SheetNames 
      
    // for(let i = 0; i < sheets.length; i++) 
    // { 
      const temp = XLSX.utils.sheet_to_json( 
            file.Sheets[file.SheetNames[0]]) 
      temp.forEach((res) => { 
          data.push(res) 
      }) 
    // } 
  
    return data
    } catch (error) {
      console.log(error)
    }
  }
  removeKeys(obj: any, keys: string[]): any {
    keys.forEach(key => delete obj[key]);
    return obj;
  }
}

import { Injectable } from '@nestjs/common';
import { BaseModulesRepository } from './baseModule.repository';
import { BaseModule, BaseModuleDocument } from './schemas/baseModule.schema';
import * as XLSX from 'xlsx';
import { Types } from 'mongoose'


@Injectable()
export class BaseModulesService {
  constructor(private readonly baseModulesRepository: BaseModulesRepository) {}

  async findAll(): Promise<BaseModuleDocument[]> {
    return this.baseModulesRepository.findAll();
  }

  async findById(baseModuleId: string): Promise<BaseModuleDocument | null> {
    return this.baseModulesRepository.findById(baseModuleId);
  }

  async create(baseModule: BaseModule): Promise<BaseModuleDocument> {
    return this.baseModulesRepository.create(baseModule);
  }

  async update(baseModuleId: string, updateData: Partial<BaseModule>): Promise<BaseModuleDocument | null> {
    return this.baseModulesRepository.update(baseModuleId, updateData);
  }

  async delete(baseModuleId: string): Promise<BaseModuleDocument | null> {
    return this.baseModulesRepository.delete(baseModuleId);
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
  async handleExcel (data: any, dataInDb: any, response: any ) {
   
  }
}

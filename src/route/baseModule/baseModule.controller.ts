import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { BaseModulesService } from './baseModule.service';
import { BaseModule } from './schemas/baseModule.schema';
import { CreateBaseModuleDto } from './dto/create-baseModule.dto';
import { UpdateBaseModuleDto } from './dto/update-baseModule.dto'; // Assuming you have an UpdateBaseModuleDto



@Controller('baseModule')
export class BaseModulesController {
  constructor(private readonly baseModulesService: BaseModulesService) {}

  @Post()
  async create(@Body() createBaseModuleDto: CreateBaseModuleDto): Promise<BaseModule> {
    const baseModule = new BaseModule();
    baseModule.driver = createBaseModuleDto.driver;
    baseModule.selectADateAndTime = createBaseModuleDto.selectADateAndTime;
    baseModule.selectACompany = createBaseModuleDto.selectACompany;
    baseModule.additionInfomation = createBaseModuleDto.additionInfomation;
    baseModule.toWayATrip = createBaseModuleDto.toWayATrip;
    baseModule.medicallyEquipped = createBaseModuleDto.medicallyEquipped;
    baseModule.userId = createBaseModuleDto.userId;
    baseModule.distance = createBaseModuleDto.distance;
    baseModule.statusId = createBaseModuleDto.statusId;
    baseModule.tripStatusId = createBaseModuleDto.tripStatusId;
    baseModule.voucher = createBaseModuleDto.voucher;
    return this.baseModulesService.create(baseModule);
  }

  @Get()
  async findAll(): Promise<BaseModule[]> {
    return this.baseModulesService.findAll();
  }
  @Get(':id') // Define route parameter ':id'
  async findById(@Param('id') id: string): Promise<BaseModule> {
    return this.baseModulesService.findById(id);
  }
  @Delete(':id') // Define route parameter ':id'
  async deleteById(@Param('id') id: string): Promise<void> {
    await this.baseModulesService.delete(id);
  }
  @Put(':id')
  async editById(@Param('id') id: string, @Body() updateBaseModuleDto: UpdateBaseModuleDto): Promise<BaseModule> {
    return this.baseModulesService.update(id, updateBaseModuleDto);
  }
}


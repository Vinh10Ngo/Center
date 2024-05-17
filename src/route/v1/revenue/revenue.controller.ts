import { Controller, Get, Post, Body, Param, Delete, Put, Query } from '@nestjs/common';
import { RevenueService } from './revenue.service';
import { Revenue } from './schemas/revenue.schema';
import { CreateRevenueDto } from './dto/create-revenue.dto';
import { UpdateRevenueDto } from './dto/update-revenue.dto'; // Assuming you have an UpdateRevenueDto



@Controller('revenue')
export class RevenueController {
  constructor(private readonly revenueService: RevenueService) {}

  @Post()
  async create(@Body() createRevenueDto: CreateRevenueDto): Promise<Revenue> {
    const revenue = new Revenue();
    revenue.revenue = createRevenueDto.revenue;
    revenue.actualRevenue = createRevenueDto.actualRevenue;
    revenue.reason = createRevenueDto.reason;
    revenue.classId = createRevenueDto.classId;
    revenue.studentId = createRevenueDto.studentId;
    return this.revenueService.create(revenue);
  }

  @Get()
  async findAll(@Query() query: any): Promise<Revenue[]> {
    return this.revenueService.findAll(query);
  }
  @Get(':id') // Define route parameter ':id'
  async findById(@Param('id') id: string): Promise<Revenue> {
    return this.revenueService.findById(id);
  }
  @Delete(':id') // Define route parameter ':id'
  async deleteById(@Param('id') id: string): Promise<void> {
    await this.revenueService.delete(id);
  }
  @Put(':id')
  async editById(@Param('id') id: string, @Body() updateRevenueDto: UpdateRevenueDto): Promise<Revenue> {
    return this.revenueService.update(id, updateRevenueDto);
  }
}


import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BaseModulesController } from './baseModule.controller';
import { BaseModulesService } from './baseModule.service';
import { BaseModule, BaseModuleSchema } from './schemas/baseModule.schema';
import { BaseModulesRepository } from './baseModule.repository';




@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://project-nodejs:phucvinh123456@cluster0.1r1zsfn.mongodb.net/Center?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{ name: BaseModule.name, schema: BaseModuleSchema }]),
  ],
  controllers: [BaseModulesController],
  providers: [BaseModulesService, BaseModulesRepository],
  exports:[BaseModulesService, BaseModulesRepository]
})  
export class BaseModulesModule {}

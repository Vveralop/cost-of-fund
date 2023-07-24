import { Module } from '@nestjs/common';
import { DynamooseModule } from 'nestjs-dynamoose';
import { FundingSchema } from './models/funding.schema';
//import { FundingSchema } from './models/fund.schema';
import { CreateFundingController, DeleteFundingController, SelectFundingController, UpdateFundingController } from 'src/adapter/controllers/funding';
import { CreateFundingService, DeleteFundingService, SelectFundingService, UpdateFundingService } from './services';

@Module({
  imports: [
    DynamooseModule.forFeature([
      {
        name: 'funding',
        schema: FundingSchema,
      },
    ]),
  ],
  controllers: [CreateFundingController, SelectFundingController, UpdateFundingController, DeleteFundingController],
  providers: [CreateFundingService, SelectFundingService, UpdateFundingService, DeleteFundingService],

})
export class FundingModule {}

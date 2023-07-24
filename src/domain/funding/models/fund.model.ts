import { CreateFundingInput } from "../dto/cretae-fund.dto";

export type FundingKey = {
  id: string;
};

export class Funding extends CreateFundingInput {
    id: string;
    marketdata: string;
    curve: string;
    createAt: Date;
    updateAt: Date;
  }
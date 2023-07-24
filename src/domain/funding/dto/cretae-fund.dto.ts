import { IsNotEmpty } from "class-validator";

export class CreateFundingInput {
    @IsNotEmpty() 
    marketdata: string;
  
    @IsNotEmpty()
    curve: string;
  }
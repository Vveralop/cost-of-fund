import { IsEnum, IsNotEmpty } from 'class-validator';
import { Calendar, Convention, Currency, DayCounter, HelperType } from './funding.enums';

class HelperConfig {
  tenor: string;
  @IsEnum(Calendar)
  calendar: Calendar;
  fixingDays: number;
  endOfMonth: boolean;
  baseCurrencyAsCollateral: boolean;
  @IsEnum(Convention)
  convention: Convention;
  discountCurve: string;
  settlementDays: number;
  identifier: string;
}

class FxSpotPoint {
  value: number;
  ticker: string;
}

class RateHekpers {
  @IsEnum(HelperType)
  helperType: HelperType;
  helperConfig: HelperConfig;
  marketConfig: {
    fxSpot: FxSpotPoint,
    fxPoints: FxSpotPoint
  }
}

class CurveConfig {
  curveType: string;
  @IsEnum(DayCounter)
  dayCounter: DayCounter;
  enableExtrapolation: boolean;
  @IsEnum(Currency)
  currency: Currency;
  rateHelpers: [RateHekpers]
}

class CurveIndex {
  indexType: string;
  tenor: string;
  @IsEnum(DayCounter)
  dayCounter: DayCounter;
  @IsEnum(Currency)
  currency: Currency;
  fixingDays: number;
  @IsEnum(Calendar)
  calendar: Calendar;
  endOfMonth: boolean;
  @IsEnum(Convention)
  convention: Convention;
}

class Curves {
  curveName: string;
  curveConfig: CurveConfig;
  curveIndex: CurveIndex;
}

class MarketData {
  refDate: Date;
  curves: [ Curves ]
}

class Curve {
  curveName: string;
  nodes: [{
    date: Date;
    value: number;
  }]
} 

export class CreateFundingInput {
  @IsNotEmpty() 
  marketdata: MarketData;

  @IsNotEmpty()
  curve: Curve;
}

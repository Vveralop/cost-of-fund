import { Schema } from 'dynamoose';

export const FundingSchema = new Schema({
  id: {
    type: String,
    hashKey: true,
  },
  marketdata: { type: String },
  curve: { type: String },
  createAt: {
    type: Date,
  },
  updateAt: {
    type: Date,
  },
});

import { DynamooseModule } from 'nestjs-dynamoose';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
	imports: [
        ConfigModule.forRoot ({envFilePath: ['.env']}),
        DynamooseModule.forRoot({
          // local: process.env.IS_DDB_LOCAL === 'true', --Probar en ambiente distinto
          local:  process.env.URL_DYNAMODB, //'http://dynamodb-local:8000',
          aws: { 
            region: process.env.REGION,
            accessKeyId: process.env.ACCESSKEYID,
            secretAccessKey: process.env.SECRETACCESSKEY
          },
          table: {
            create: true, //process.env.IS_DDB_LOCAL === 'true', --Probar en ambiente distinto
          },
        }),
	],
	controllers: [],
	providers: [],
}
)
export class Database {}

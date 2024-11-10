import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({ 
      envFilePath: '.env',
      isGlobal: true,
     }), 
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3307,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: "db_crud",
      autoLoadEntities: true,
      synchronize: true,
    }),

    TasksModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

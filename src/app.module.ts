import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Connection, getConnectionOptions } from "typeorm";
// import { DropModule } from './drop/drop.module';
import { TypeOrmModule } from "@nestjs/typeorm";
// import { Drop } from "src/drop/entities/drop.entity";
import { UsersModule } from './users/users.module';
import { User } from "src/users/user.entity";
import { DropModule } from "src/drop/drop.module";
import { Drop } from "src/drop/entities/drop.entity";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'user',
            password: 'toto',
            database: 'drop',
            // entities: [User, Drop],
            synchronize: true,
            autoLoadEntities: true,
        }),
        UsersModule,
        DropModule,
    ],
    // controllers: [AppController],
    // providers: [AppService],
})
export class AppModule {
    // constructor(private connection: Connection) {}
}

import { createConnection } from "typeorm";

export const dataBaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => await createConnection({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'user',
            password: 'toto',
            database: 'drop',
            entities: [
                __dirname + '/../**/*.entity{.ts,.js}',
            ],
            synchronize: true,
            insecureAuth : true,
        }),
    }
]

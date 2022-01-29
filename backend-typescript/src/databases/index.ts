import config from 'config';
import { join } from 'path';
import { ConnectionOptions } from 'typeorm';
import { dbConfig } from '@interfaces/db.interface';

const { host, user, password, database }: dbConfig = config.get('dbConfig');
export const dbConnection: ConnectionOptions = {
  type: 'mysql',
  host: host,
  username: user,
  password: password,
  database: database,
  synchronize: false,
  logging: true,
  entities: [join(__dirname, '../**/*.entity{.ts,.js}')]
};

//url: `mongodb+srv://JwtUsername:JwtPassword@cluster0.0nfbu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
//url: `mongodb://${host}:${port}/${database}`
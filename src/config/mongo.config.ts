import { ConfigService } from '@nestjs/config';
import { MongooseModuleOptions } from '@nestjs/mongoose';

export const getMongoConfig = async (): Promise<MongooseModuleOptions> => {
    return {
        uri: getMongoString(),
        ...getMongoOptions()
    };
};

const getMongoString = () =>
// 'mongodb://' +
// configService.get('MONGODB_USERNAME') +
// ':' +
// configService.get('MONGODB_PASSWORD') +
// '@' +
// configService.get('MONGODB_HOST') +
// ':' +
// configService.get('MONGODB_PORT') +
// '/' +
// configService.get('MONGODB_DBNAME');

const getMongoOptions = () => ({
    useNewUrlParser: true,
    useUnifiedTopology: true
});
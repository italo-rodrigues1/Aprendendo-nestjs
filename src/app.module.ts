import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './app/todo/todo.module';
import { EmailModule } from './util/email/email-module.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST', 'localhost'), // O DB_HOST E O NOME DA VARIAVEL DE AMBIENTE, E O LOCALHOST É O VALOR PADRÃO
        port: Number(configService.get('DB_PORT', 3306)),
        username: configService.get('DB_USERNAME', 'root'),
        password: configService.get('DB_PASSWORD', '123456'),
        database: configService.get('DB_DATABASE', 'todotestemysql'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'], // PEGANDO TODAS AS ENTIDADES PARA DISTRIBUIR NA APLICACAO
        synchronize: true,
      }),
    }),
    TodoModule,
    ScheduleModule.forRoot(),
    EmailModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

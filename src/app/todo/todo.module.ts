import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from './entity/todo.entity';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

@Module({
  imports: [TypeOrmModule.forFeature([TodoEntity])], // ESTA IMPORTANDO A ENTIDADE CRIADA NO TODO.ENTITY
  controllers: [TodoController],
  providers: [TodoService],
  exports: [TodoService], // exportando todoservices para que seja possivel ser usada em qualquer parte da aplicacao
})
export class TodoModule {}

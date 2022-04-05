import { IsIn, IsNotEmpty } from "class-validator";

export class CreateTodoDto{
  @IsNotEmpty()
  task: string;

  @IsNotEmpty() // NAO PODE SER VAZIO
  @IsIn([0,1]) // ELE SO ACEITA 0 OU 1
  isDone: number;
}
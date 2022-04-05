/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';
@Entity({ name: 'todos' }) // DECORATOR DO TYPEORM, E O NOME DA TABELA SE NAO COLOCAR ELE ERA SER O NOME DA CLASS
// eslint-disable-next-line prettier/prettier
export class TodoEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  task: string;
  @Column({ name : 'is_done', type: 'tinyint',width: 1 })
  isDone: number;
  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;
  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;
}
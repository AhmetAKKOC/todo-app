import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './entities/todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private readonly todosRepo: Repository<Todo>,
  ) {}

  async create(dto: CreateTodoDto) {
    const todo = this.todosRepo.create({
      title: dto.title,
      status: dto.status,
    });
    return this.todosRepo.save(todo);
  }

  findAll() {
    return this.todosRepo.find();
  }

  async findOne(id: string) {
    const todo = await this.todosRepo.findOne({ where: { id } });
    if (!todo) throw new NotFoundException('Todo not found');
    return todo;
  }

  async update(id: string, dto: UpdateTodoDto) {
    const todo = await this.todosRepo.findOne({ where: { id } });
    if (!todo) throw new NotFoundException('Todo not found');

    if (dto.title !== undefined) todo.title = dto.title;
    if (dto.status !== undefined) todo.status = dto.status;

    return this.todosRepo.save(todo);
  }

  async remove(id: string) {
    const result = await this.todosRepo.delete(id);
    if (!result.affected) throw new NotFoundException('Todo not found');
    return { deleted: true };
  }
}

import { Repository } from 'typeorm';
import { Todo } from './entities/todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
export declare class TodosService {
    private readonly todosRepo;
    constructor(todosRepo: Repository<Todo>);
    create(dto: CreateTodoDto): Promise<Todo>;
    findAll(): Promise<Todo[]>;
    findOne(id: string): Promise<Todo>;
    update(id: string, dto: UpdateTodoDto): Promise<Todo>;
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
}

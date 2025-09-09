import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
export declare class TodosController {
    private readonly todosService;
    constructor(todosService: TodosService);
    create(dto: CreateTodoDto): Promise<import("./entities/todo.entity").Todo>;
    findAll(): Promise<import("./entities/todo.entity").Todo[]>;
    findOne(id: string): Promise<import("./entities/todo.entity").Todo>;
    update(id: string, dto: UpdateTodoDto): Promise<import("./entities/todo.entity").Todo>;
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
}

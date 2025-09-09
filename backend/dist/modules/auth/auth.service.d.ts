import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
export declare class AuthService {
    private readonly usersRepo;
    constructor(usersRepo: Repository<User>);
    login(email: string, password: string): Promise<{
        message: string;
        user: User;
    }>;
}

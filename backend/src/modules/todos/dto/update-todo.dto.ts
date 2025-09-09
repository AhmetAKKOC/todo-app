/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsIn, IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateTodoDto {
  @IsOptional()
  @IsString()
  @MinLength(2)
  title?: string;

  @IsOptional()
  @IsIn(['pending', 'in-progress', 'done'])
  status?: 'pending' | 'in-progress' | 'done';
}

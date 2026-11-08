import { Injectable } from '@angular/core';
import { CreateUserRequestDto } from '../models/CreateUserRequestDto';
import { UpdateUserRequestDto } from '../models/UpdateUserRequestDto';
import { UserResponseDto } from '../models/UserResponseDto';
import { BaseApiService } from './base-api.service';

@Injectable({ providedIn: 'root' })
export class UserService extends BaseApiService<UserResponseDto, CreateUserRequestDto, UpdateUserRequestDto> {
    protected readonly resource = 'users';
}

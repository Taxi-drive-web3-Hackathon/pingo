import type { User } from '@prisma/client';

export class UserResponse {
  id: number;

  name: string;

  email: string;

  static fromUserEntity(entity: User): UserResponse {
    const response = new UserResponse();
    response.id = entity.id;
    response.email = entity.email;
    response.name = entity.name;

    return response;
  }
}

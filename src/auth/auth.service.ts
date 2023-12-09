import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Prisma } from '@prisma/client';
import { JwtPayload } from './jwt-payload';
import { LoginRequest, SignupRequest } from './models';
import { AuthUser } from './auth-user';
import { PrismaService } from '../common/services/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async signup(signupRequest: SignupRequest): Promise<void> {
    try {
      await this.prisma.user.create({
        data: {
          name: signupRequest.name.toLowerCase(),
          email: signupRequest.email.toLowerCase(),
        },
        select: null,
      });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          // unique constraint
          throw new ConflictException();
        } else throw e;
      } else throw e;
    }
  }

  async validateUser(payload: JwtPayload): Promise<AuthUser> {
    const user = await this.prisma.user.findUnique({
      where: { id: payload.id },
    });

    if (user !== null) {
      return user;
    }
    throw new UnauthorizedException();
  }

  async login(loginRequest: LoginRequest): Promise<string> {
    const normalizedIdentifier = loginRequest.identifier.toLowerCase();
    const user = await this.prisma.user.findFirst({
      where: {
        OR: [
          {
            name: normalizedIdentifier,
          },
          {
            email: normalizedIdentifier,
          },
        ],
      },
      select: {
        id: true,
        email: true,
        name: true,
      },
    });

    if (user === null) {
      throw new UnauthorizedException();
    }

    const payload: JwtPayload = { id: user.id };

    return this.jwtService.signAsync(payload);
  }

  async isNameAvailable(username: string): Promise<boolean> {
    const user = await this.prisma.user.findUnique({
      where: { name: username.toLowerCase() },
      select: { name: true },
    });
    return user === null;
  }

  async isEmailAvailable(email: string): Promise<boolean> {
    const user = await this.prisma.user.findUnique({
      where: { email: email.toLowerCase() },
      select: { email: true },
    });
    return user === null;
  }
}

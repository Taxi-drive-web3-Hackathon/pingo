import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from '../src/app.module';
import { SignupRequest } from '../src/auth/models';

describe('AuthController (e2e)', () => {
  let app;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    // Request Validation
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        transform: true,
      }),
    );
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('/auth/signup POST', () => {
    it('should not accept invalid emails', () => {
      const signupRequest: SignupRequest = {
        email: 'auysal16',
        name: 'invalid_username',
      };

      return request(app.getHttpServer())
        .post('/auth/signup')
        .send(signupRequest)
        .expect(400)
        .expect({
          statusCode: 400,
          error: 'Bad Request',
          message: ['email must be an email'],
        });
    });
  });
});

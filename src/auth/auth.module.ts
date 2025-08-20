import { Module } from '@nestjs/common';
import { FirebaseAdminModule } from './firebase.module';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [FirebaseAdminModule, UsersModule],
  controllers: [AuthController],
})
export class AuthModule {}



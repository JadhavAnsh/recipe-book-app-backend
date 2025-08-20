import { Body, Controller, Post, UseGuards, Req } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { FirebaseAuthGuard } from './firebase-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly usersService: UsersService) {}

  // Client calls this once after sign-in to ensure user exists in DB
  @UseGuards(FirebaseAuthGuard)
  @Post('sync')
  async syncUser(@Body() body: { email?: string; displayName?: string }, @Req() req: any) {
    const uid = req.user.uid as string;
    await this.usersService.upsertFirebaseUser({ uid, email: body?.email, displayName: body?.displayName });
    return { ok: true };
  }
}



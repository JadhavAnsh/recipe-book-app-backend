import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { FIREBASE_ADMIN } from './firebase.module';
import * as admin from 'firebase-admin';

@Injectable()
export class FirebaseAuthGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader: string | undefined = request.headers['authorization'];
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('Missing Authorization header');
    }
    const token = authHeader.substring('Bearer '.length);
    try {
      const decoded = await admin.auth().verifyIdToken(token);
      request.user = { uid: decoded.uid };
      return true;
    } catch (err) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}



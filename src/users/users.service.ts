import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument, Users } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users.name)
    private readonly userModel: Model<UserDocument>,
  ) {}

  async upsertFirebaseUser(params: { uid: string; email?: string; displayName?: string }) {
    const { uid, email, displayName } = params;
    await this.userModel.updateOne(
      { uid },
      { $set: { email, displayName } },
      { upsert: true },
    );
  }

  async findByUid(uid: string) {
    return this.userModel.findOne({ uid }).exec();
  }
}



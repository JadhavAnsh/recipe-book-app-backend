import { IsMongoId, IsString, Length } from 'class-validator';

export class CreateNoteDto {
  @IsMongoId()
  recipeId: string;

  // userId will be injected from auth guard, not provided by client
  userId: string;

  @IsString()
  @Length(1, 2000)
  text: string;
}

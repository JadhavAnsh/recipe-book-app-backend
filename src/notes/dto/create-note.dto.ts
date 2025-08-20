import { IsMongoId, IsString, Length } from 'class-validator';

export class CreateNoteDto {
  @IsMongoId()
  recipeId: string;

  @IsString()
  @Length(1, 2000)
  text: string;
}

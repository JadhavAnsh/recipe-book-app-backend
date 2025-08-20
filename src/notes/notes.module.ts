import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NotesService } from './notes.service';
import { NotesController } from './notes.controller';
import { Notes, NoteSchema } from './schemas/note.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Notes.name, schema: NoteSchema }])],
  controllers: [NotesController],
  providers: [NotesService],
})
export class NotesModule {}

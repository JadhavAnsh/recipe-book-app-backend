import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { NoteDocument, Notes } from './schemas/note.schema';

@Injectable()
export class NotesService {
  constructor(
    @InjectModel(Notes.name)
    private readonly noteModel: Model<NoteDocument>,
  ) {}

  async create(createNoteDto: CreateNoteDto) {
    const created = await this.noteModel.create({
      recipeId: new Types.ObjectId(createNoteDto.recipeId),
      text: createNoteDto.text,
    });
    return {
      id: created._id.toString(),
      recipeId: created.recipeId.toString(),
      text: created.text,
      createdAt: created.get('createdAt')?.toISOString?.(),
      updatedAt: created.get('updatedAt')?.toISOString?.(),
    };
  }

  async findAll() {
    const docs = await this.noteModel.find().exec();
    return docs.map((d) => ({
      id: d._id.toString(),
      recipeId: d.recipeId.toString(),
      text: d.text,
      createdAt: d.get('createdAt')?.toISOString?.(),
      updatedAt: d.get('updatedAt')?.toISOString?.(),
    }));
  }

  async findByRecipe(recipeId: string) {
    const docs = await this.noteModel
      .find({ recipeId: new Types.ObjectId(recipeId) })
      .exec();
    return docs.map((d) => ({
      id: d._id.toString(),
      recipeId: d.recipeId.toString(),
      text: d.text,
      createdAt: d.get('createdAt')?.toISOString?.(),
      updatedAt: d.get('updatedAt')?.toISOString?.(),
    }));
  }

  async findOne(id: string) {
    const doc = await this.noteModel.findById(id).exec();
    if (!doc) throw new NotFoundException(`Note ${id} not found`);
    return {
      id: doc._id.toString(),
      recipeId: doc.recipeId.toString(),
      text: doc.text,
      createdAt: doc.get('createdAt')?.toISOString?.(),
      updatedAt: doc.get('updatedAt')?.toISOString?.(),
    };
  }

  async update(id: string, updateNoteDto: UpdateNoteDto) {
    const doc = await this.noteModel
      .findByIdAndUpdate(
        id,
        {
          $set: {
            ...(updateNoteDto.text !== undefined && { text: updateNoteDto.text }),
          },
        },
        { new: true },
      )
      .exec();
    if (!doc) throw new NotFoundException(`Note ${id} not found`);
    return {
      id: doc._id.toString(),
      recipeId: doc.recipeId.toString(),
      text: doc.text,
      createdAt: doc.get('createdAt')?.toISOString?.(),
      updatedAt: doc.get('updatedAt')?.toISOString?.(),
    };
  }

  async remove(id: string) {
    const doc = await this.noteModel.findByIdAndDelete(id).exec();
    if (!doc) throw new NotFoundException(`Note ${id} not found`);
    return {
      id: doc._id.toString(),
      recipeId: doc.recipeId.toString(),
      text: doc.text,
      createdAt: doc.get('createdAt')?.toISOString?.(),
      updatedAt: doc.get('updatedAt')?.toISOString?.(),
    };
  }
}
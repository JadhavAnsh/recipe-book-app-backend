import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { FirebaseAuthGuard } from '../auth/firebase-auth.guard';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @UseGuards(FirebaseAuthGuard)
  @Post()
  create(@Body() createNoteDto: CreateNoteDto, @Req() req: any) {
    return this.notesService.create({ ...createNoteDto, userId: req.user.uid });
  }

  @UseGuards(FirebaseAuthGuard)
  @Get()
  findAll(@Req() req: any) {
    return this.notesService.findAllByUser(req.user.uid);
  }

  @UseGuards(FirebaseAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string, @Req() req: any) {
    return this.notesService.findOneScoped(id, req.user.uid);
  }

  @UseGuards(FirebaseAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNoteDto: UpdateNoteDto, @Req() req: any) {
    return this.notesService.updateScoped(id, req.user.uid, updateNoteDto);
  }

  @UseGuards(FirebaseAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string, @Req() req: any) {
    return this.notesService.removeScoped(id, req.user.uid);
  }

  @UseGuards(FirebaseAuthGuard)
  @Get('by-recipe/:recipeId')
  findByRecipe(@Param('recipeId') recipeId: string, @Req() req: any) {
    return this.notesService.findByRecipe(recipeId, req.user.uid);
  }
}

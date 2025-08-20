import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipesModule } from './recipes/recipes.module';
import { NotesModule } from './notes/notes.module';

@Module({
  imports: [RecipesModule, NotesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

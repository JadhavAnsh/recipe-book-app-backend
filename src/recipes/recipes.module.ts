import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RecipesService } from './recipes.service';
import { RecipesResolver } from './recipes.resolver';
import { Recipes, RecipeSchema } from './schemas/recipe.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Recipes.name, schema: RecipeSchema },
    ]),
  ],
  providers: [RecipesResolver, RecipesService],
})
export class RecipesModule {}

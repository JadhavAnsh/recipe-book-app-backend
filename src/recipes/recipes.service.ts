import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRecipeInput } from './dto/create-recipe.input';
import { UpdateRecipeInput } from './dto/update-recipe.input';
import { Recipe } from './entities/recipe.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Recipes, RecipeDocument } from './schemas/recipe.schema';

@Injectable()
export class RecipesService {
  constructor(
    @InjectModel(Recipes.name)
    private readonly recipeModel: Model<RecipeDocument>,
  ) {}

  private mapDocToRecipe(doc: RecipeDocument): Recipe {
    return {
      id: doc._id.toString(),
      title: doc.title,
      ingredients: doc.ingredients,
      steps: doc.steps,
      category: doc.category,
      image: doc.image ?? null,
    } as Recipe;
  }

  async create(createRecipeInput: CreateRecipeInput): Promise<Recipe> {
    const created = await this.recipeModel.create({
      title: createRecipeInput.title,
      ingredients: createRecipeInput.ingredients,
      steps: createRecipeInput.steps,
      category: createRecipeInput.category,
      image: createRecipeInput.image ?? null,
    });
    return this.mapDocToRecipe(created);
  }

  async findAll(): Promise<Recipe[]> {
    const docs = await this.recipeModel.find().exec();
    return docs.map((d) => this.mapDocToRecipe(d));
  }

  async findOne(id: string): Promise<Recipe> {
    const doc = await this.recipeModel.findById(id).exec();
    if (!doc) throw new NotFoundException(`Recipe with id ${id} not found`);
    return this.mapDocToRecipe(doc);
  }

  async update(id: string, updateRecipeInput: UpdateRecipeInput): Promise<Recipe> {
    const doc = await this.recipeModel
      .findByIdAndUpdate(
        id,
        {
          $set: {
            ...(updateRecipeInput.title !== undefined && { title: updateRecipeInput.title }),
            ...(updateRecipeInput.ingredients !== undefined && { ingredients: updateRecipeInput.ingredients }),
            ...(updateRecipeInput.steps !== undefined && { steps: updateRecipeInput.steps }),
            ...(updateRecipeInput.category !== undefined && { category: updateRecipeInput.category }),
            ...(updateRecipeInput.image !== undefined && { image: updateRecipeInput.image }),
          },
        },
        { new: true },
      )
      .exec();
    if (!doc) throw new NotFoundException(`Recipe with id ${id} not found`);
    return this.mapDocToRecipe(doc);
  }

  async remove(id: string): Promise<Recipe> {
    const doc = await this.recipeModel.findByIdAndDelete(id).exec();
    if (!doc) throw new NotFoundException(`Recipe with id ${id} not found`);
    return this.mapDocToRecipe(doc);
  }
}

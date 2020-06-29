import { getRepository } from 'typeorm';
import Category from '../models/Category';

interface Request {
  title: string;
}

interface Response {
  id: number;
  title: string;
}

class CreateCategoryService {
  public async execute({ title }: Request): Promise<Category> {
    const categoryRepository = getRepository(Category);

    const categoryExist = await categoryRepository.findOne({
      where: { title },
    });

    if (!categoryExist) {
      const categoryStored = categoryRepository.create({ title });
      await categoryRepository.save(categoryStored);
      return categoryStored;
    }

    return categoryExist;
  }
}

export default CreateCategoryService;

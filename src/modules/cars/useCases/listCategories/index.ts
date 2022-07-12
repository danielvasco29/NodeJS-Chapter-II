import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const categoriesRepository = new CategoriesRepository();
const ListCategoriesUseCase = new ListCategoriesUseCase(CategoriesRepository);
const ListCategoriesController = new ListCategoriesController(
  ListCategoriesUseCase
);

export { ListCategoriesController };

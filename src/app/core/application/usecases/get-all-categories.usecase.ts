import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../domain/models/category.model';
import { CategoryRepository } from '../../domain/repositories/category.repository';

@Injectable()
export class GetAllCategoriesUseCase {
  private readonly repository = inject(CategoryRepository);
  execute(countCategories: number): Observable<Category[]> {
    return this.repository.getAll(countCategories);
  }
}

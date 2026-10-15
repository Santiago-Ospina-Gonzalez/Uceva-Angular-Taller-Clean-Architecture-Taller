import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../../domain/models/category.model';
import { CategoryRepository } from '../../../domain/repositories/category.repository';
import { DataService } from '../../services/data.service';
@Injectable()
export class CategorySpringBootRepositoryImpl extends CategoryRepository {
  private readonly data = inject(DataService);
  getAll(count: number): Observable<Category[]> { return this.data.getAllCategoriesSpringBoot(count); }
}

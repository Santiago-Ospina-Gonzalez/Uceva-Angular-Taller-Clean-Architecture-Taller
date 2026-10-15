import { Component, inject } from '@angular/core';
import { GetAllCategoriesUseCase } from '../../../core/application/usecases/get-all-categories.usecase';
import { Category } from '../../../core/domain/models/category.model';
import { AlertComponent } from '../../components/alert/alert.component';
import { CategoriesTableComponent } from '../../components/categories-table/categories-table.component';
import { State } from '../../interfaces/state.interface';
@Component({ selector: 'app-categories', templateUrl: './categories.page.html', imports: [CategoriesTableComponent, AlertComponent], providers: [GetAllCategoriesUseCase] })
export class CategoriesPage {
  categories: Category[] = [];
  state: State = 'init';
  private readonly useCase = inject(GetAllCategoriesUseCase);
  ngOnInit(): void {
    this.state = 'loading';
    this.useCase.execute(10).subscribe({ next: (items) => { this.categories = items; this.state = 'success'; }, error: () => { this.state = 'error'; } });
  }
}

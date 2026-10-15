import { Component, inject } from '@angular/core';
import { GetAllSuppliersUseCase } from '../../../core/application/usecases/get-all-suppliers.usecase';
import { Supplier } from '../../../core/domain/models/supplier.model';
import { AlertComponent } from '../../components/alert/alert.component';
import { SuppliersTableComponent } from '../../components/suppliers-table/suppliers-table.component';
import { State } from '../../interfaces/state.interface';
@Component({ selector: 'app-suppliers', templateUrl: './suppliers.page.html', imports: [SuppliersTableComponent, AlertComponent], providers: [GetAllSuppliersUseCase] })
export class SuppliersPage {
  suppliers: Supplier[] = [];
  state: State = 'init';
  private readonly useCase = inject(GetAllSuppliersUseCase);
  ngOnInit(): void {
    this.state = 'loading';
    this.useCase.execute(10).subscribe({ next: (items) => { this.suppliers = items; this.state = 'success'; }, error: () => { this.state = 'error'; } });
  }
}

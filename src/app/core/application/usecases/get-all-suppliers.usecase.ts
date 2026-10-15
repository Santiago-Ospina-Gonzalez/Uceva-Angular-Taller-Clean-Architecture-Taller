import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Supplier } from '../../domain/models/supplier.model';
import { SupplierRepository } from '../../domain/repositories/supplier.repository';

@Injectable()
export class GetAllSuppliersUseCase {
  private readonly repository = inject(SupplierRepository);
  execute(countSuppliers: number): Observable<Supplier[]> {
    return this.repository.getAll(countSuppliers);
  }
}

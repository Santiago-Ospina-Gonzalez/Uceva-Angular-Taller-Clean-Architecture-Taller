import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Supplier } from '../../../domain/models/supplier.model';
import { SupplierRepository } from '../../../domain/repositories/supplier.repository';
import { DataService } from '../../services/data.service';
@Injectable()
export class SupplierLocalRepositoryImpl extends SupplierRepository {
  private readonly data = inject(DataService);
  getAll(count: number): Observable<Supplier[]> { return this.data.getAllSuppliersLocal(count); }
}

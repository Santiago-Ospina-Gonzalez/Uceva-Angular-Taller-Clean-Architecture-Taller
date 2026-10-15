import { Observable } from 'rxjs';
import { Supplier } from '../models/supplier.model';

export abstract class SupplierRepository {
  abstract getAll(countSuppliers: number): Observable<Supplier[]>;
}

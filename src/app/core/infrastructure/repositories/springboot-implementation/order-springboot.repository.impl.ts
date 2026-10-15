import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../../../domain/models/order.model';
import { OrderRepository } from '../../../domain/repositories/order.repository';
import { DataService } from '../../services/data.service';
@Injectable()
export class OrderSpringBootRepositoryImpl extends OrderRepository {
  private readonly data = inject(DataService);
  getAll(count: number): Observable<Order[]> { return this.data.getAllOrdersSpringBoot(count); }
}

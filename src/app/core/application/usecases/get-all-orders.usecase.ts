import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../../domain/models/order.model';
import { OrderRepository } from '../../domain/repositories/order.repository';

@Injectable()
export class GetAllOrdersUseCase {
  private readonly repository = inject(OrderRepository);
  execute(countOrders: number): Observable<Order[]> {
    return this.repository.getAll(countOrders);
  }
}

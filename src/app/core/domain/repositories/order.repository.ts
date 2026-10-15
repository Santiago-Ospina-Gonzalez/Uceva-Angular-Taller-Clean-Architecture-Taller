import { Observable } from 'rxjs';
import { Order } from '../models/order.model';

export abstract class OrderRepository {
  abstract getAll(countOrders: number): Observable<Order[]>;
}

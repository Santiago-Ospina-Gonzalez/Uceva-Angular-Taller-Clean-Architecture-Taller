import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Order } from '../../../core/domain/models/order.model';
@Component({ selector: 'app-orders-table', templateUrl: './orders-table.component.html', imports: [CurrencyPipe] })
export class OrdersTableComponent { @Input() orders: Order[] = []; }

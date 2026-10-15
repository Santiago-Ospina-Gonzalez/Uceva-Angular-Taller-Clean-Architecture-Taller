import { Component, Input } from '@angular/core';
import { Supplier } from '../../../core/domain/models/supplier.model';
@Component({ selector: 'app-suppliers-table', templateUrl: './suppliers-table.component.html' })
export class SuppliersTableComponent { @Input() suppliers: Supplier[] = []; }

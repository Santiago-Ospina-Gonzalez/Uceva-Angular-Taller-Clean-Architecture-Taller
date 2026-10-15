import { Component, Input } from '@angular/core';
import { Category } from '../../../core/domain/models/category.model';
@Component({ selector: 'app-categories-table', templateUrl: './categories-table.component.html' })
export class CategoriesTableComponent { @Input() categories: Category[] = []; }

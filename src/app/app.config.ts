import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { ProductRepository } from './core/domain/repositories/product.repository';
import { UserRepository } from './core/domain/repositories/user.repository';
import { ProductNodeRepositoryImpl } from './core/infrastructure/repositories/node-implementation/product-node.repository.impl';
import { UserNodeRepositoryImpl } from './core/infrastructure/repositories/node-implementation/user-node.repository.impl';
import { UserSpringBootRepositoryImpl } from './core/infrastructure/repositories/springboot-implementation/user-springboot.repository.impl';
import { ProductSpringBootRepositoryImpl } from './core/infrastructure/repositories/springboot-implementation/product-springboot.repository.impl';
import { UserLocalRepositoryImpl } from './core/infrastructure/repositories/local-implementation/user-local.repository.impl';
import { ProductLocalRepositoryImpl } from './core/infrastructure/repositories/local-implementation/product-local.repository.impl';
import { CategoryRepository } from './core/domain/repositories/category.repository';
import { OrderRepository } from './core/domain/repositories/order.repository';
import { SupplierRepository } from './core/domain/repositories/supplier.repository';
import { CategoryLocalRepositoryImpl } from './core/infrastructure/repositories/local-implementation/category-local.repository.impl';
import { OrderLocalRepositoryImpl } from './core/infrastructure/repositories/local-implementation/order-local.repository.impl';
import { SupplierLocalRepositoryImpl } from './core/infrastructure/repositories/local-implementation/supplier-local.repository.impl';
import { CategoryNodeRepositoryImpl } from './core/infrastructure/repositories/node-implementation/category-node.repository.impl';
import { OrderNodeRepositoryImpl } from './core/infrastructure/repositories/node-implementation/order-node.repository.impl';
import { SupplierNodeRepositoryImpl } from './core/infrastructure/repositories/node-implementation/supplier-node.repository.impl';
import { CategorySpringBootRepositoryImpl } from './core/infrastructure/repositories/springboot-implementation/category-springboot.repository.impl';
import { OrderSpringBootRepositoryImpl } from './core/infrastructure/repositories/springboot-implementation/order-springboot.repository.impl';
import { SupplierSpringBootRepositoryImpl } from './core/infrastructure/repositories/springboot-implementation/supplier-springboot.repository.impl';
import { environment } from '../environments/environment';

const userRepositoryImplementation = {
  local: UserLocalRepositoryImpl,
  node: UserNodeRepositoryImpl,
  springboot: UserSpringBootRepositoryImpl,
}[environment.backend];

const productRepositoryImplementation = {
  local: ProductLocalRepositoryImpl,
  node: ProductNodeRepositoryImpl,
  springboot: ProductSpringBootRepositoryImpl,
}[environment.backend];
const categoryRepositoryImplementation = { local: CategoryLocalRepositoryImpl, node: CategoryNodeRepositoryImpl, springboot: CategorySpringBootRepositoryImpl }[environment.backend];
const orderRepositoryImplementation = { local: OrderLocalRepositoryImpl, node: OrderNodeRepositoryImpl, springboot: OrderSpringBootRepositoryImpl }[environment.backend];
const supplierRepositoryImplementation = { local: SupplierLocalRepositoryImpl, node: SupplierNodeRepositoryImpl, springboot: SupplierSpringBootRepositoryImpl }[environment.backend];

/**
 * Configuración principal de la aplicación Angular.
 *
 * @remarks
 * Este objeto define los *providers* globales utilizados
 * en el arranque de la aplicación mediante la API
 * `bootstrapApplication`.
 *
 * Incluye:
 * - Manejo global de errores del navegador
 * - Configuración de detección de cambios
 * - Sistema de enrutamiento
 * - Cliente HTTP con interceptores
 *
 * @see {@link bootstrapApplication}
 */
export const appConfig: ApplicationConfig = {

  /**
   * Proveedores globales de la aplicación.
   *
   * @remarks
   * Se registran servicios y configuraciones esenciales
   * que estarán disponibles en toda la aplicación.
   */
  providers: [

    { provide: UserRepository, useClass: userRepositoryImplementation },
    { provide: ProductRepository, useClass: productRepositoryImplementation },
    { provide: CategoryRepository, useClass: categoryRepositoryImplementation },
    { provide: OrderRepository, useClass: orderRepositoryImplementation },
    { provide: SupplierRepository, useClass: supplierRepositoryImplementation },

    /**
     * Proveedor de listeners globales de errores del navegador.
     *
     * @remarks
     * Captura errores no controlados y eventos globales,
     * permitiendo un manejo centralizado de excepciones.
     */
    provideBrowserGlobalErrorListeners(),

    /**
     * Configuración de la detección de cambios basada en Zone.js.
     *
     * @remarks
     * `eventCoalescing: true` agrupa múltiples eventos en un
     * solo ciclo de detección de cambios, mejorando
     * el rendimiento de la aplicación.
     */
    provideZoneChangeDetection({ eventCoalescing: true }),

    /**
     * Proveedor del sistema de enrutamiento.
     *
     * @remarks
     * Registra las rutas definidas en `routes`
     * para la navegación de la aplicación.
     *
     * @see {@link routes}
     */
    provideRouter(routes),

    provideHttpClient(),
  ]
};
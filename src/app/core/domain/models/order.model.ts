export type OrderStatus = 'Pendiente' | 'Enviado' | 'Entregado';

export interface Order {
  id: number;
  customer: string;
  total: number;
  status: OrderStatus;
}

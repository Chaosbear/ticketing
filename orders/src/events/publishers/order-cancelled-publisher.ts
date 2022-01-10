import {
  Subjects,
  Publisher,
  OrderCancelledEvent,
} from '@chaosbear-ticketing/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}

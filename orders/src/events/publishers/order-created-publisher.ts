import {
  Publisher,
  OrderCreatedEvent,
  Subjects,
} from '@chaosbear-ticketing/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}

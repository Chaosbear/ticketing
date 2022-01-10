import {
  Subjects,
  Publisher,
  PaymentCreatedEvent,
} from '@chaosbear-ticketing/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}

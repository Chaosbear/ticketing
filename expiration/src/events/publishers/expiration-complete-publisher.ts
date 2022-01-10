import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@chaosbear-ticketing/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}

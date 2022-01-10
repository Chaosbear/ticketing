import { Publisher, Subjects, TicketCreatedEvent } from '@chaosbear-ticketing/common'

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}

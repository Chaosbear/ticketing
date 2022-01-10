import { Publisher, Subjects, TicketUpdatedEvent } from '@chaosbear-ticketing/common'

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}

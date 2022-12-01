import { client } from 'api/client';
import { endpoints } from 'api/endpoints';

import { TEvent, TEventReminder, TInvitationParams } from './../../store/slices/eventsSlice/types';

export const createEventRequest = (event: TEvent) =>
  client.post(endpoints.EventsService.createEvent(), { new_event: event });

export const getMyEventsRequest = () => client.get(endpoints.EventsService.getMyEvents());

export const getEventByIdRequest = (event_id: number) =>
  client.get(endpoints.EventsService.getEventById(), {
    params: { event_id },
  });

export const editEventRequest = (update_event: TEvent) =>
  client.put(endpoints.EventsService.editMyEvent(), {
    update_event,
  });

export const deleteMyEventRequest = (event_id: number) =>
  client.delete(endpoints.EventsService.deleteMyEvent(), {
    params: { event_id },
  });

export const deleteInvitationRequest = (invitation_id: number) =>
  client.delete(endpoints.EventsService.deleteInvitation(), {
    params: { invitation_id },
  });

export const getEventInvitationsRequest = () =>
  client.get(endpoints.EventsService.getEventInvitations());

export const getEventsReminderRequest = () =>
  client.get(endpoints.EventsService.getEventsReminder());

export const createEventsReminderRequest = (new_reminder: TEventReminder) =>
  client.post(endpoints.EventsService.createEventsReminder(), {
    new_reminder,
  });

export const createEventInvitationRequest = (status: string[], params: TInvitationParams) =>
  client.post(
    endpoints.EventsService.createEventInvitation(),
    {
      new_invitation: {
        status,
      },
    },
    {
      params,
    },
  );

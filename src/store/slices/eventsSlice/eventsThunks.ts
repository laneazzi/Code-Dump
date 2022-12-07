import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

import { eventsApi } from 'api';

import { TEvent, TEventReminder, TInvitationArgs } from './types';

export const createEvent = createAsyncThunk(
  'events/createEvent',
  async (event: TEvent, { dispatch }) => {
    try {
      const response = await eventsApi.createEventRequest(event);
      dispatch(getMyEvents());
      return response.data;
    } catch (error) {
      const Error = error as AxiosError;
      toast.error('Event creation failed', {
        position: 'top-left',
        theme: 'dark',
        autoClose: 3000,
        draggable: true,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
        hideProgressBar: false,
      });
      throw Error;
    }
  },
);

export const getMyEvents = createAsyncThunk('events/getMyEvents', async () => {
  try {
    const response = await eventsApi.getMyEventsRequest();

    return response.data;
  } catch (error) {
    const Error = error as AxiosError;
    toast.error('Something went wrong please update the page', {
      position: 'top-left',
      theme: 'dark',
      autoClose: 3000,
      draggable: true,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      hideProgressBar: false,
    });

    throw Error;
  }
});

export const getEventById = createAsyncThunk('events/getEventById', async (event_id: number) => {
  try {
    const response = await eventsApi.getEventByIdRequest(event_id);

    return response.data;
  } catch (error) {
    const Error = error as AxiosError;
    throw Error;
  }
});

export const editEvent = createAsyncThunk('events/editEvent', async (update_event: TEvent) => {
  try {
    const response = await eventsApi.editEventRequest(update_event);

    return response.data;
  } catch (error) {
    const Error = error as AxiosError;
    throw Error;
  }
});

export const deleteEvent = createAsyncThunk('events/deleteEvent', async (event_id: number) => {
  try {
    const response = await eventsApi.deleteMyEventRequest(event_id);

    return response.data;
  } catch (error) {
    const Error = error as AxiosError;
    throw Error;
  }
});

export const deleteInvitation = createAsyncThunk(
  'events/deleteInvitation',
  async (invitation_id: number) => {
    try {
      const response = await eventsApi.deleteInvitationRequest(invitation_id);
      return response.data;
    } catch (error) {
      const Error = error as AxiosError;
      throw Error;
    }
  },
);

export const getEventInvitations = createAsyncThunk('events/getEventInvitations', async () => {
  try {
    const response = await eventsApi.getEventInvitationsRequest();

    return response.data;
  } catch (error) {
    const Error = error as AxiosError;
    throw Error;
  }
});

export const getEventsReminder = createAsyncThunk('events/getEventsReminder', async () => {
  try {
    const response = await eventsApi.getEventsReminderRequest();

    return response.data;
  } catch (error) {
    const Error = error as AxiosError;
    throw Error;
  }
});

export const createEventsReminder = createAsyncThunk(
  'events/createEventsReminder',
  async (new_reminder: TEventReminder) => {
    try {
      const response = await eventsApi.createEventsReminderRequest(new_reminder);

      return response.data;
    } catch (error) {
      const Error = error as AxiosError;
      throw Error;
    }
  },
);

export const createEventInvitation = createAsyncThunk(
  'events/createEventInvitation',
  async (state: TInvitationArgs) => {
    try {
      const { status, ...params } = state;
      const response = await eventsApi.createEventInvitationRequest(status, params);

      return response.data;
    } catch (error) {
      const Error = error as AxiosError;
      throw Error;
    }
  },
);

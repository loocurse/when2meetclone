export interface EventData {
  users: User[];
  _id: string;
  event_name: string;
  start_date: string;
  end_date: string;
  start_time: string;
  end_time: string;
  availability: { [key: string]: string[] };
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface User {
  id: string;
  name: string;
}

export interface State {
  eventData: EventData;
  userID: string;
  currentHover: string[];
}

export const state: State = {
  eventData: <EventData>{},
  userID: "",
  currentHover: [],
};

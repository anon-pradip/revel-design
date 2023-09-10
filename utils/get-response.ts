import axios from "axios";

const eventsApi = process.env.EVENTS_API as string;
const eventApi = process.env.SINGLE_EVENT_API as string;

export const getEvents = async () => {
  const res = await axios.get(eventsApi);
  return JSON.stringify(res.data);
};
export const getSingleEvent = async () => {
  const res = await axios.get(eventApi);
  return res.data;
};

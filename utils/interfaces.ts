export interface MainEvent {
  id: string;
  name: string;
  image: string;
  promo_video?: any;
  about: string;
  interested_count: number;
  date: string;
  is_free: boolean;
  is_exclusive: boolean;
  enable_booking: boolean;
  enable_registration: boolean;
  going_count: number;
  going_person_images: any[];
  age_constraint: string;
  start_date: string;
  end_date: string;
  language: string[];
  category: string[];
  subcategory: string[];
  event_type: string[];
  duration: string;
  artist: Artist[];
  event_content: Eventcontent[];
  venue: Venue[];
  event_image: string[];
  organizer: Organizer;
  is_interested: boolean;
}

export interface Organizer {
  id: string;
  name: string;
  image: string;
  description: string;
  is_followed: boolean;
  followers_count: number;
}

export interface Venue {
  id: string;
  name: string;
  is_completed: boolean;
  city: string;
  address: string;
  geolocation: Geolocation;
  start_datetime: string;
  end_datetime: string;
  ticket_option: Ticketoption[];
}

export interface Ticketoption {
  id: string;
  name: string;
  amount: string;
  amount_type: string;
  tag: string;
  description: string;
  event_venue: string;
  sales_end_datetime: string;
}

export interface Geolocation {
  latitude: number;
  longitude: number;
}

export interface Eventcontent {
  title: string;
  content: string;
}

export interface Artist {
  id: string;
  name: string;
  image: string;
}

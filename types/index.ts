export type User = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  studentId?: string;
  profileImage?: string;
};

export type Place = {
  id: string;
  name: string;
  category: string;
  location: string;
  description: string;
  image?: string;
  lat?: number;
  lng?: number;
  shuttleBusRoutes?: string[];
};

export type Room = {
  id: string;
  roomNumber: string;
  placeId: string;
  placeName: string;
};

export type NewsItem = {
  id: string;
  title: string;
  category: string;
  description: string;
  date: string;
  sourceLink: string;
  image?: string;
};

export type Task = {
  id: string;
  title: string;
  description?: string;
  dueDate?: string;
  done: boolean;
  isDefault?: boolean;
};
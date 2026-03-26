import { Place, Room } from "../types";

export const places: Place[] = [
  {
    id: "1",
    name: "Science Complex Building",
    category: "Academic",
    location: "Faculty of Science",
    description: "Main academic building for science classes and laboratories.",
    lat: 16.4735,
    lng: 102.8237,
    shuttleBusRoutes: ["Red Line", "Green Line"],
  },
  {
    id: "2",
    name: "Main Library",
    category: "Library",
    location: "Khon Kaen University",
    description: "Central library and learning resource center.",
    lat: 16.475,
    lng: 102.82,
    shuttleBusRoutes: ["Yellow Line"],
  },
];

export const rooms: Room[] = [
  {
    id: "r1",
    roomNumber: "SC6601A",
    placeId: "1",
    placeName: "Science Complex Building",
  },
  {
    id: "r2",
    roomNumber: "SC6602",
    placeId: "1",
    placeName: "Science Complex Building",
  },
];
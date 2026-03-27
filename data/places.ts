import { Place, Room } from "../types";

export const places: Place[] = [
  {
    id: "1",
    name: "Main Library",
    category: "Library",
    location: "Khon Kaen University",
    description: "Central library and learning resource center.",
    building: "Building A",
    floor: "1st-5th Floor",
    time: "08:00 - 17:00",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=80",
    lat: 16.475,
    lng: 102.82,
    shuttleBusRoutes: ["Yellow Line"],
  },
  {
    id: "2",
    name: "Student Center",
    category: "Facility",
    location: "Khon Kaen University",
    description: "Student service center and activity area.",
    building: "Building B",
    floor: "1st-3rd Floor",
    time: "08:00 - 17:00",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    lat: 16.474,
    lng: 102.821,
    shuttleBusRoutes: ["Red Line"],
  },
  {
    id: "3",
    name: "Science Lab Complex",
    category: "Classroom",
    location: "Faculty of Science",
    description: "Laboratory rooms and science classrooms.",
    building: "Building C",
    floor: "2nd-4th Floor",
    time: "08:00 - 17:00",
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80",
    lat: 16.4735,
    lng: 102.8237,
    shuttleBusRoutes: ["Red Line", "Green Line"],
  },
  {
    id: "4",
    name: "Engineering Building",
    category: "Classroom",
    location: "Faculty of Engineering",
    description: "Engineering classrooms and lecture halls.",
    building: "Building D",
    floor: "1st-6th Floor",
    time: "08:00 - 17:00",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop",
    lat: 16.472,
    lng: 102.8245,
    shuttleBusRoutes: ["Blue Line"],
  },
  {
    id: "5",
    name: "Sports Complex",
    category: "Facility",
    location: "Khon Kaen University",
    description: "Sports and fitness center for students.",
    building: "Building E",
    floor: "Ground Floor",
    time: "08:00 - 17:00",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
    lat: 16.471,
    lng: 102.822,
    shuttleBusRoutes: ["Green Line"],
  },
];

export const rooms: Room[] = [
  {
    id: "r1",
    roomNumber: "SC6601A",
    placeId: "3",
    placeName: "Science Lab Complex",
  },
  {
    id: "r2",
    roomNumber: "SC6602",
    placeId: "3",
    placeName: "Science Lab Complex",
  },
  {
    id: "r3",
    roomNumber: "EN4201",
    placeId: "4",
    placeName: "Engineering Building",
  },
];
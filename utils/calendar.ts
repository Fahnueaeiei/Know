import * as Linking from "expo-linking";

const addToCalendar = () => {
  Linking.openURL("content://com.android.calendar/time/");
};
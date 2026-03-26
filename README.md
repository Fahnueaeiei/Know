# Know KKU: Mobile Application for University Student Information

## 1. Introduction

Know KKU is a mobile application developed to assist new students at Khon Kaen University in accessing essential information for university life. The system integrates multiple information sources into a single platform, improving accessibility, reducing confusion, and enhancing user experience.

The application provides features such as campus place navigation, university news, task management (checklist), and user profile management.

---

## 2. Objectives

* To develop a mobile application for accessing university information
* To centralize important data such as places, news, and tasks
* To improve usability and accessibility for new students
* To reduce time spent searching for information

---

## 3. Technologies Used

### Programming Languages

* TypeScript
* JavaScript

### Frameworks & Tools

* React Native
* Expo
* Expo Router
* Node.js

### Development Tools

* Visual Studio Code
* GitHub

---

## 4. System Features

* **Home**: Welcome screen with search and highlighted information
* **Place**: Browse and search campus locations
* **Place Detail**: View building, floor, description, shuttle bus, and navigation
* **News**: View university news and activities
* **News Detail**: Read full content
* **Checklist**: Manage personal tasks
* **Profile**: View and edit user information


---

## 5. System Configuration and Setup

### 5.1 Requirements

* Node.js (v18+ recommended)
* npm

---

### 5.2 Installation

```bash
npm install
```

---

### 5.3 Running the Application

```bash
npx expo start
```

Clear cache (if error):

```bash
npx expo start -c
```

---

## 6. System Architecture

* Frontend: React Native (Expo)
* Data Source: Local mock data (TypeScript files)
* External Service: Google Maps API

---

## 7. Limitations

* Uses static data (no backend)
* No authentication system
* No real-time updates
* Requires internet for navigation features

---

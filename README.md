## Overview
This repository contains the solution for the problem statement; Backend application which is implemented both in Spring Framework and ExpressJs and a dedicated frontend which holds the UI for displaying and creating a listing.

### Listings view
<img src="screenshots/viewListings.png" width="600">

### Listings Form
<img src="screenshots/listingsForm-1.png" width="600">
<img src="screenshots/listingsForm-2.png" width="600">

## Installation 

## Spring backend application
### Prerequisites

- Java 11 or higher
- Maven
- MySQL

### Setup

1. Clone the repository:
   
   ```bash
   git clone https://github.com/dheerajkrishna141/housing-panda.git
2. Navigate to the project directory:
   
   ```bash
   cd backend\spring
3. Configure the environment variables for database connection in
   
   ```src/main/resources/application.properties:```

4. Build the project:
   ```bash
   mvn clean install
5. Run the project:
   ```bash
   mvn spring-boot:run


## ExpressJs backend application

1. Clone the repository:
   
   ```bash
   git clone https://github.com/dheerajkrishna141/housing-panda.git
2. Navigate to the project directory:
   
   ```bash
   cd backend\express
3. Install project dependencies:
   ```bash
   npm install
4. Configure the environment variables (mentioned in `src/database.js`) for database connection by creating a `.env`.
   
5. Run `npm run dev` to start the web server


## React frontend application

1. Clone the repository:
   
   ```bash
   git clone https://github.com/dheerajkrishna141/housing-panda.git
2. Navigate to the project directory:
   
   ```bash
   cd frontend
3. Install project dependencies:
   ```bash
   npm install
4. Configure the environment variable (mentioned in `src/service/api-client.ts`) for backend connection by creating a `.env`.

5. Run `npm run dev` to start the web server

   

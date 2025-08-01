# ✈️ Airline Management System

An interactive full-stack web application that simulates real-time airline operations for admins, staff, and customers. Built using React, Flask, and MySQL with a focus on robust backend logic and dynamic frontend views.

---

## 📌 Features

- **Flight Management**: View, schedule, and update flights with real-time status
- **Passenger Operations**: Bookings, boarding, and disembarking
- **Airplane Tracking**: Monitor airplane assignments and maintenance logs
- **Stored Procedures**: Backend logic implemented through MySQL stored procedures and triggers
- **Role-Based Access**: Separate interfaces and capabilities for admins, staff, and customers
- **Real-Time UI Updates**: Dynamic and responsive UI using React

---

## 🛠️ Tech Stack

| Layer       | Technology            |
|------------|------------------------|
| Frontend   | React, JavaScript, CSS |
| Backend    | Flask (Python)         |
| Database   | MySQL                  |
| Tools      | Git, Postman, MySQL Workbench |

---

## 💡 My Contributions

- Designed and implemented stored procedures for:
  - `flight_takeoff()`
  - `passengers_board()`
  - `passengers_disembark()`
- Built Flask APIs to handle flight, passenger, and airplane operations
- Developed interactive React views for real-time flight and passenger management
- Integrated database logic with frontend and backend components for seamless operation

---

## 🚀 How to Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/airline-management-system.git
   cd airline-management-system
   
2. Set up the MySQL database
   Start your MySQL server
   Use the create_schema.sql and stored_procedures.sql files in the database/ directory to initialize the schema and logic
   
4. Start the backend server
   cd backend
   python app.py

5. Start the frontend development server
   cd ../frontend
   npm install
   npm start



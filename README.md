#🚆 Railway Ticket Reservation System
A full-stack railway ticket reservation web application built using Python (backend) and Vanilla JavaScript + Tailwind CSS (frontend).

This project helps you understand how real web apps work:

* routing
* APIs
* HTTP requests
* DOM manipulation
* state management
* modular JavaScript
* frontend–backend communication

---

## 🚀 **What This Project Demonstrates**

### **Full Stack Basics**

* How a backend serves data over **REST APIs**
* How a frontend fetches that data and updates the UI
* How routing works in both frontend and backend
* How to organize files in a real-world project

### **Frontend Concepts**

* Single Page Application (SPA) basics
* Dynamic routing without page reload
* Importing JavaScript modules
* Using Tailwind CSS for styling
* Using external CDNs (icons, fonts)
* DOM manipulation: rendering tables and forms
* Component-based UI structure
* Managing UI state (edit mode, selected records)

### **Backend Concepts**

* Python HTTP server using `BaseHTTPRequestHandler`
* Manual routing (no Flask / Django)
* Serving static files
* REST API design
* CRUD operations
* JSON request & response handling
* SQLite database integration
* Error handling and 404 responses

---

## 🏗️ **Project Structure**

```
RAILWAY_TICKET_RESERVATION/
│
├── app.py                     # Starts the Python server
├── router.py                  # Handles API + UI routes
│
├── controllers/               # API controllers
│   ├── trains.py
│   ├── bookings.py
│   ├── staff.py
│   ├── reservations.py
│   └── reports.py
│
├── services/                  # Business & DB logic
│   ├── train_service.py
│   ├── booking_service.py
│   ├── staff_service.py
│   ├── reservation_service.py
│   └── report_service.py
│
├── database/                  # SQLite database layer
│   ├── connection.py
│   ├── trains.py
│   ├── bookings.py
│   ├── staff.py
│   ├── reservations.py
│   └── report.py
│
├── frontend/
│   ├── pages/                 # SPA pages
│   ├── assets/
│   │   ├── css/
│   │   ├── js/
│   │   │   ├── router/        # SPA router
│   │   │   ├── components/    # UI components
│   │   │   ├── controllers/   # Frontend logic
│   │   │   ├── services/      # API calls
│   │   │   ├── state/         # UI state
│   │   │   └── utils/         # Helpers
│   └── env.js                 # Frontend config
│
├── tests/                     # Backend tests
│
└── railway.db                 # SQLite database
```

---
## 🔌 **How the App Works (Big Picture)**

### **1. User visits / (Dashboard)**
* Browser loads `index.html` (SPA shell)
* SPA router loads the dashboard into `<main id="app">`
* User navigates without page reload

### **2. User opens a management page**
* JavaScript controller initializes page logic
* Fetches data from backend API
* Renders tables and forms dynamically

### **3. User submits a form**
* Frontend collects form data
* Sends request to backend API
* Backend processes request and updates database
* Frontend refreshes data without reloading page

### **4. Edit / Delete actions**
* Edit → loads record into form
* Delete → sends DELETE request
* Table updates instantly

---

## 🧱 **Frontend Key Files**

### **✔ `viewRouter.js`**
* Controls SPA navigation
* Updates URL without page reload
* Loads correct page content dynamically

### **✔ `Frontend Controllers`**
* Handle form submission
* Fetch data from APIs
* Control UI state
* Refresh tables dynamically

### **✔ `Frontend Services`**
* Contain all fetch() calls
* Communicate with backend APIs
* Safe JSON parsing to avoid crashes

### **✔ `Components`**
* `Header` – navigation bar
* Dashboard cards
* `Forms` – Add / Edit data
* `Tables` – View records
* `Alerts` – success & error messages

---

## 🗄️ **Backend Key Files**

### **✔ `router.py`**

* Separates routes into:

  * UI routes (`/`, `/trains`, `/bookings`,etc.)
  * Static files (`/frontend/...`)
  * API routes (`/api/...`)
* Handles 404 errors safely

### **✔ `controllers`**

* Handle business logic
* Validate data
* Call service layer
* Send JSON responses

### **✔ `Database Layer`**

* SQLite database (railway.db)
* SQL queries separated by feature
* Clean connection handling

### **📊 `Supported Operations (CRUD)`**

| Module       | Operations                   |
| ------------ | ---------------------------- |
| Trains       | Add, View, Edit, Delete      |
| Bookings     | Add, View, Edit, Delete      |
| Staff        | Add, View, Edit, Delete      |
| Reservations | Link train + booking + staff |
| Tickets      | View & export                |

---

## 🎨 **Styling & UI Enhancements**

* TailwindCSS via CDN
* Google Fonts (Outfit)
* Font Awesome icons
* External favicon
* Clean layout with card-style design


---


## 📦 **Run the App**

```
python app.py
```

Visit:

```
http://localhost:8000
```

# 🖥️ **Backend Architecture (Explained Simply)**

The backend is built using pure Python without frameworks.

This helps in understanding:

* How HTTP works internally
* How routing is handled manually
* How APIs process requests
* How data flows between layers

---

# 🧩 **Key Concepts Used in the Backend**

### **✔ Raw HTTP server**

* Uses Python's built-in `BaseHTTPRequestHandler`
* You handle `GET`, `POST`, `PUT`, `DELETE` manually
* Great for learning how web servers work under the hood

### **✔ Custom Router**

* You decide which URL goes to which function
* Splits routes into:

  * **UI routes** (serving HTML/JS/CSS)
  * **API routes** (JSON responses)
  * **Static file routes** (anything inside `/frontend`)

### **✔ SQLite database**

* Simple file-based database (`railway.db`)
* Stores all railway data permanently
* No server setup required

### **✔ CRUD operations**

Backend supports:

### **🚆Train APIs**

| HTTP Method | Path              | What it Does         |
| ----------- | ----------------- | -------------------- |
| GET         | `/api/trains`     | Get all trains       |
| GET         | `/api/trains/:id` | Get a single train   |
| POST        | `/api/trains`     | Add a new train      |
| PUT         | `/api/trains/:id` | Update train details |
| DELETE      | `/api/trains/:id` | Delete a train       |


### **📋Booking APIs**

| HTTP Method | Path                | What it Does           |
| ----------- | ------------------- | ---------------------- |
| GET         | `/api/bookings`     | Get all bookings       |
| GET         | `/api/bookings/:id` | Get a single booking   |
| POST        | `/api/bookings`     | Create a new booking   |
| PUT         | `/api/bookings/:id` | Update booking details |
| DELETE      | `/api/bookings/:id` | Cancel a booking       |

### **👨‍✈️ Staff APIs**

| HTTP Method | Path             | What it Does              |
| ----------- | ---------------- | ------------------------- |
| GET         | `/api/staff`     | Get all staff members     |
| GET         | `/api/staff/:id` | Get a single staff member |
| POST        | `/api/staff`     | Add a new staff member    |
| PUT         | `/api/staff/:id` | Update staff details      |
| DELETE      | `/api/staff/:id` | Remove a staff member     |

### **🔗 Reservation APIs**

| HTTP Method | Path                    | What it Does         |                 | ----------- | ----------------------- | -------------------- |
| GET         | `/api/reservations`     | Get all reservations |
| POST        | `/api/reservations`     | Create a reservation |
| DELETE      | `/api/reservations/:id` | Delete a reservation |

### **🎟️ Ticket / Report APIs**

| HTTP Method | Path                       | What it Does          |
| ----------- | -------------------------- | --------------------- |
| GET         | `/api/reports/tickets`     | Get ticket directory  |
| GET         | `/api/reports/tickets/:id` | Get ticket details    |
| GET         | `/api/reports/tickets/csv` | Export tickets as CSV |
| GET         | `/api/reports/tickets/pdf` | Export tickets as PDF |


### **✔ JSON responses**

* Python returns JSON strings manually
* Browser reads JSON using `fetch()`

### **✔ Error handling**

* If a route does not exist → return 404
* If parsing errors happen → safe 404
* Prevents server crashes and 502 errors

---

# 🏛️ **Backend Folder Structure (Explained)**
```
backend/
├── app.py                 # Starts the server
├── router.py              # Handles all HTTP routing
│
├── controllers/           # Business logic (API handlers)
│   ├── trains.py          # Train CRUD functions
│   ├── bookings.py        # Booking CRUD functions
│   ├── staff.py           # Staff CRUD functions
│   └── reservations.py   # Reservation logic
│
├── services/              # Database helpers
│   ├── train_service.py
│   ├── booking_service.py
│   ├── staff_service.py
│   └── reservation_service.py
│
├── database/
│   ├── connection.py      # Opens SQLite connection
│   └── queries.py         # SQL functions
│
└── core/
    ├── static.py          # Serves static files (HTML, CSS, JS)
    ├── middleware.py      # Adds CORS headers
    ├── request.py         # Request parsing
    └── responses.py       # Helpers for sending JSON & 404
```

---

# 🔌 **How the Backend Serves the Frontend**

### 1️⃣ Browser visits `/students`

Backend returns:


```
frontend/pages/index.html
```

That HTML loads:

* Tailwind CDN
* JS modules
* SPA router

Everything else (JS/CSS/images) is served by the backend through:

```python
if path.startswith("/frontend/"):
    serve_static(...)
```


### 2️⃣ Browser loads the SPA

The browser now requests:

```
/frontend/assets/js/router/viewRouter.js
/frontend/assets/js/components/Header.html
/frontend/env.js
...
```

Backend serves all of these using the static file server.

---

# 🧠 **UI Router vs API Router**

The backend router distinguishes:

### **UI Routes (Frontend Pages)**

```
/
 /home
 /trains
 /bookings
 /staff
 /reservations
```
These always return:

```
index.html (SPA shell)
```

### **Static Routes**

Everything under:

```
/frontend/
```

gets served as a file.

### **API Routes**

Only URLs beginning with:
```
/api/
```

are handled by backend Python functions, for example:
```
/api/trains
/api/bookings
/api/staff
/api/reservations
```
This separation is essential for SPA-based applications.

# 🛠️ **How the API Functions Work**

Example: `create_booking()`
Runs when the browser does:

```
fetch("/api/bookings", { method: "POST" })
```

Backend steps:

1. Read request body (JSON)
2. Convert into Python dictionary
3. Insert booking details into SQLite database
4. Send back success response
5. 
Example success JSON:

```json
{"status": "ok"}
```

---


# 🧱 **Database Layer (Services + Queries)**

### **connection.py**

* Opens a connection to SQLite
* Ensures the table exists (trains, bookings, staff, reservations)


### **queries.py**

Contains SQL like:

```
SELECT * FROM trains;
INSERT INTO bookings (passenger_name, train_id, seat_no);
DELETE FROM reservations WHERE id = ?;

```

### **controllers**
Controller files use database queries to perform:
*Train management (add, update, delete)
*Ticket booking and cancellation
*Staff management
*Reservation handling

This clean separation ensures:
*Controller → business logic
*Service / Queries → database logic
*Router → HTTP routing


---

# 🔄 **Request Cycle (Big Picture)**

Example: When a user books a ticket:

1. Frontend reads booking form data
2. Sends JSON to backend (POST /api/bookings)
3. Backend:

   * Parses JSON
   * Stores booking in database
   * Creates reservation
   * Responds with success
4. Frontend:

   * Shows confirmation message
   * Reloads booking list (GET /api/bookings)
   * Updates UI

This is **the full loop of a real full-stack application**.

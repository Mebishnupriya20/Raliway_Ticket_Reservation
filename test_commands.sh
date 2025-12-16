############################################
# Railway Ticket Reservation – API Observation
############################################

# A. Get All Trains
curl -X GET "https://probable-space-barnacle-69qvpp54vx5g2rwpg-8000.app.github.dev/api/trains"

# ------------------------------------------

# B. Get One Train
curl -X GET "http://localhost:8000/api/trains/1"

# -------CREATE TRAIN-----------------------------------
curl -X POST "https://probable-space-barnacle-69qvpp54vx5g2rwpg-8000.app.github.dev/api/trains" \
-H "Content-Type: application/json" \
-d '{
  "train_name": "Rajdhani Express",
  "source": "Delhi",
  "destination": "Mumbai",
  "departure_time": "18:30",
  "arrival_time": "08:15"
}'

# C. Get All Bookings
curl -X GET "http://localhost:8000/api/bookings"

# ------------------------------------------

# D. Get One Booking
curl -X GET "http://localhost:8000/api/bookings/1"

# ------------------------------------------

# E. Create Booking
curl -X POST "http://localhost:8000/api/bookings/create" \
-H "Content-Type: application/x-www-form-urlencoded" \
-d "train_id=1" \
-d "passenger_name=Alice Johnson" \
-d "age=25" \
-d "seat_no=12"

# ------------------------------------------

# F. Update Booking
curl -X PUT "http://localhost:8000/api/bookings/1/update" \
-H "Content-Type: application/x-www-form-urlencoded" \
-d "passenger_name=Alice Updated" \
-d "age=26" \
-d "seat_no=15"

# ------------------------------------------

# G. Delete Booking
curl -X DELETE "http://localhost:8000/api/bookings/1/delete"

# ------------------------------------------

# H. Get All Staff
curl -X GET "http://localhost:8000/api/staff"
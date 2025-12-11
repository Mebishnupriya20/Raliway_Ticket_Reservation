# config.py
# Stores global configuration values for the Railway Ticket Reservation System

# ---------------------------
# Database Configuration
# ---------------------------

DATABASE_NAME = "railway.db"        # SQLite database file


# ---------------------------
# Server Configuration
# ---------------------------

HOST = "localhost"
PORT = 8000                         # Your API will run on http://localhost:8000


# ---------------------------
# CORS Settings (if needed)
# ---------------------------

ALLOWED_ORIGINS = [
    "http://localhost",
    "http://127.0.0.1",
    "http://localhost:5500",
]


# ---------------------------
# Project Settings
# ---------------------------

PROJECT_NAME = "Railway Ticket Reservation System"

# How many seats one train coach can have (custom rule)
MAX_SEATS_PER_TRAIN = 200
# services/enrollment_service.py
# Business logic for enrollments (no HTTP here)

from database.reservations import (
    reservations_get_all,
    reservations_get_one,
    reservations_create,
    reservations_delete,
)

def service_get_all():
    return reservations_get_all()

def service_get_one(enrollment_id):
    return reservations_get_one(enrollment_id)

def service_create(data):
    return reservations_create(data)

def service_delete(enrollment_id):
    return reservations_delete(enrollment_id)
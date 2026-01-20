// Global app state
let state = {
   trains: [],
  bookings: [],
  staff: [],
  reservations: [],
  editingId: null,
  editingBookingId: null,

};

// Update part of the state
export function setState(newState) {
  state = { ...state, ...newState };
}

// Read the current state
export function getState() {
  return state;
}
<<<<<<< HEAD
// frontend/assets/js/services/profilesService.js
=======
// frontend/assets/js/services/ticketsService.js
>>>>>>> c298013 (add searching and sorting)
// Only responsible for fetching data (no DOM / UI here)

const API_URL = window.ENV.API_BASE_URL; // /api/students

export async function fetchAllTickets() {
  const res = await fetch(API_URL);
  return res.ok ? await res.json() : [];
<<<<<<< HEAD
}
=======
}
>>>>>>> c298013 (add searching and sorting)

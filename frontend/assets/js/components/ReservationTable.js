import { $ } from "../utils/dom.js";
import { deleteReservationAction } from "../controllers/reservationsController.js";

export function renderReservationTable(reservations) {
  const body = $("reservationsTableBody");
  const empty = $("noReservations");

  body.innerHTML = "";

  if (!reservations || reservations.length === 0) {
    empty.classList.remove("hidden");
    return;
  }
  empty.classList.add("hidden");

  enrollments.forEach(e => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="px-3 py-2 border">${e.id}</td>
      <td class="px-3 py-2 border">${e.train_id}</td>
      <td class="px-3 py-2 border">${e.booking_id}</td>
      <td class="px-3 py-2 border">${e.reserved_on ?? ""}</td>
      <td class="px-3 py-2 border">
        <button class="text-red-600 underline" data-del="${e.id}">Delete</button>
      </td>
    `;
    body.appendChild(tr);
  });

  body.querySelectorAll("[data-del]").forEach(btn => {
    btn.addEventListener("click", () => deleteReservationAction(Number(btn.dataset.del)));
  });
}
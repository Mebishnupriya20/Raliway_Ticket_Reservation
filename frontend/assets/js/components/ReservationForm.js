import { $ } from "../utils/dom.js";

export function fillReservationDropdowns(students, courses) {
  const trainSel = $("train_id");
  const bookingSel = $("booking_id");

  trainSel.innerHTML = `<option value="">Select train</option>`;
  bookingSel.innerHTML = `<option value="">Select booking</option>`;

  (trains || []).forEach(s => {
    const opt = document.createElement("option");
    opt.value = t.id;
    opt.textContent = `${s.name} (ID: ${s.id})`;
    trainSel.appendChild(opt);
  });

  (bookings || []).forEach(c => {
    const opt = document.createElement("option");
    opt.value = b.id;
    opt.textContent = `${c.title} (ID: ${c.id})`;
    bookingSel.appendChild(opt);
  });
}
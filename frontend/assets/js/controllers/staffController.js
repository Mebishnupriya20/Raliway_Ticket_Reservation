import {
  apiGetAllStaff,
  apiGetOneStaff,
  apiCreateStaff,
  apiUpdateStaff,
  apiDeleteStaff
} from "../services/staffService.js";

import { showAlert } from "../components/Alert.js";
import { renderStaffTable } from "../components/StaffTable.js";
import { resetStaffForm, fillStaffForm } from "../components/StaffForm.js";
import { setState, getState } from "../state/store.js";
import { $ } from "../utils/dom.js";

export function initStaffController() {
  loadStaffs();

  const form = $("StaffForm");
  const cancelBtn = $("cancelBtn");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const data = {
        name: $("name").value.trim(),
        role: $("role").value.trim(),
        contact: $("contact").value.trim()
      };

      const { editingId } = getState();
      editingId
        ? await updateStaff(editingId, data)
        : await createNewStaff(data);
    });
  }

  if (cancelBtn) {
    cancelBtn.addEventListener("click", () => {
      setState({ editingId: null });
      resetStaffForm();
    });
  }
}

export async function loadStaffs() {
  const spinner = $("loadingSpinner");
  const table = $("staffsTableContainer");

  if (!spinner || !table) return;

  spinner.classList.remove("hidden");
  table.classList.add("hidden");


  const staffs = await apiGetAllStaff();
  setState({ staffs });
  renderStaffTable(staffs);

  spinner.classList.remove("hidden");
  table.classList.add("hidden");

}

export async function createNewStaff(data) {
  const res = await apiCreateStaff(data);
  if (res.ok) {
    showAlert("Staff added!");
    resetStaffForm();
    loadStaffs();
  }
}

export async function editStaff(id) {
  const staff = await apiGetOneStaff(id);
  setState({ editingId: id });
  fillStaffForm(staff);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export async function updateStaff(id, data) {
  const res = await apiUpdateStaff(id, data);
  if (res.ok) {
    showAlert("Updated!");
    resetStaffForm();
    setState({ editingId: null });
    loadStaffs();
  }
}

export async function deleteStaffAction(id) {
  if (!confirm("Delete this staff?")) return;
  const res = await apiDeleteStaff(id);
  if (res.ok) {
    showAlert("Deleted!");
    loadStaffs();
  }
}

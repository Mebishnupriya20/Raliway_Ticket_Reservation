import {
    apiGetAllTrain,
    apiGetOneTrain,
    apiCreateTrain,
    apiUpdateTrain,
    apiDeleteTrain
} from "../services/trainService.js";

import { showAlert } from "../components/Alert.js";
import { renderTrainTable } from "../components/trainTable.js";
import { resetForm, fillFrom } from "../components/trainForm.js";

import { setState, getState } from "../state/store.js";
import {$, createElement } from "../utils/dom.js";

// Setup event listeners and load initial data
// Initialize the main logic and set up all necessary event listeners
export function initTrainsController() {
    // Start by fetching and displaying all student data immediately upon load
    loadTrains();
    
     // --- Handle Form Submissions ---

     
  // Attach a listener to the 'submit' event of the student input form
  $("trainForm").addEventListener("submit", async (e) => {
     // Prevent the browser's default form submission behavior (page refresh)
     e.preventDefault();

     // Collect data from the input fields using the custom '$' selector
     const data = {
      train_name: $("train_name").value.trim(),   // Get name value, remove whitespace
      source: $("source").value.trim(),   // Get source
      destination: $("destination").value.trim(),  // Get destination
      departure_time: $("departure_time").value.trim(),   //
      arrival_time: $("arrival_time").value.trim()
     }
  })
}

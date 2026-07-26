"use strict";
async function fetchMotorcycles(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
}
function renderMotorcycleCard(motorcycle) {
    return `
    <div class="motorcycle-card">
      <div class="motorcycle-card-image-container">
        <img
          class="motorcycle-card-image"
          src="${motorcycle.image_url}"
          alt="${motorcycle.year} ${motorcycle.manufacturer} ${motorcycle.name}"
        />

        <div class="motorcycle-card-year-badge">
          ${motorcycle.year}
        </div>
      </div>

      <div class="motorcycle-card-content">
        <div class="motorcycle-card-header">
          <div>
            <h3 class="motorcycle-card-title">
              ${motorcycle.name}
            </h3>

            <p class="motorcycle-card-manufacturer">
              ${motorcycle.manufacturer}
            </p>
          </div>

          <span class="motorcycle-card-category">
            ${motorcycle.category}
          </span>
        </div>

        <p class="motorcycle-card-description">
          ${motorcycle.description}
        </p>

        <div class="motorcycle-card-footer">
          <div>
            <p class="motorcycle-card-price">
              $${motorcycle.price.toLocaleString("en-US")}
            </p>

            <p class="motorcycle-card-engine">
              ${motorcycle.year} model
            </p>
          </div>
        </div>
      </div>
    </div>
  `;
}
class MotorcycleGalleryApp {
    constructor() {
        this.allMotorcycles = [];
    }
    async renderMotorcycles() {
        const grid = document.getElementById("motorcycle-grid");
        if (!grid) {
            console.error("Could not find #motorcycle-grid.");
            return;
        }
        try {
            console.log("Fetching motorcycles...");
            this.allMotorcycles = await fetchMotorcycles("https://cdn.freecodecamp.org/curriculum/labs/data/motorcycles.json");
            console.log("Motorcycles received:", this.allMotorcycles);
            const cards = this.allMotorcycles
                .map((motorcycle) => renderMotorcycleCard(motorcycle))
                .join("");
            grid.innerHTML = cards;
        }
        catch (error) {
            console.error("Unable to load motorcycles:", error);
            grid.innerHTML = `
        <div class="no-results">
          <p class="no-results-text">
            Motorcycles could not be loaded.
          </p>
        </div>
      `;
        }
    }
}
const app = new MotorcycleGalleryApp();
app.renderMotorcycles();

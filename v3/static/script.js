document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("overlay");
    const cakeBuilder = document.getElementById("cake-builder");
    const finishButton = document.getElementById("finish-button");

    // Remove overlay when a shape is selected
    document.querySelectorAll(".shape-option").forEach(option => {
        option.addEventListener("click", () => {
            if (option.id !== "custom") {
                overlay.style.display = "none";
                cakeBuilder.style.display = "block";
                addLayer(); // Add the first layer (default: vanilla)
            }
        });
    });

    // Add a new layer (default: vanilla)
    function addLayer() {
        const cakeVisual = document.getElementById("cake-visual");
        const newLayer = document.createElement("div");
        newLayer.className = "cake-layer";
        newLayer.innerHTML = `
            <div class="outside-view-layer"></div>
            <div class="cross-section-layer"></div>
        `;
        cakeVisual.appendChild(newLayer);
    }

    // Open selection menu
    function openSelectionMenu(options, callback) {
        const selectionMenu = document.getElementById("selection-menu");
        selectionMenu.innerHTML = options.map(option => `
            <div class="selection-item" data-value="${option.value}">
                <img src="${option.icon}" alt="${option.label}">
                <p>${option.label}</p>
            </div>
        `).join("");

        selectionMenu.querySelectorAll(".selection-item").forEach(item => {
            item.addEventListener("click", () => {
                callback(item.dataset.value);
                selectionMenu.innerHTML = ""; // Close menu after selection
            });
        });
    }

    // Check if all options are selected
    function checkCompletion() {
        // Logic to check if all layers, fillings, and frostings are selected
        finishButton.disabled = false; // Enable finish button
    }

    // Redirect to payment page
    finishButton.addEventListener("click", () => {
        window.location.href = "/payment";
    });
});
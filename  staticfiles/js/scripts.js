// scripts.js
console.log('This is a message in the console');
// Highlight input fields on focus


// Define the plants data
const plantData = {
    ksa: {
        riyadh: ['Date Palm', 'Cactus', 'Acacia'],
        jeddah: ['Bougainvillea', 'Neem', 'Basil'],
        dammam: ['Moringa', 'Sesbania', 'Mangrove']
    },
    usa: {
        'new york': ['Oak', 'Maple', 'Rose'],
        'los angeles': ['Cactus', 'Lavender', 'Aloe Vera'],
        chicago: ['Corn', 'Sunflower', 'Soybean']
    },
    japan: {
        tokyo: ['Sakura (Cherry Blossom)', 'Bamboo', 'Camellia'],
        osaka: ['Rice', 'Peach Tree', 'Lotus'],
        kyoto: ['Maple', 'Persimmon', 'Iris']
    }
};

const countrySelect = document.getElementById('country');
const stateSelect = document.getElementById('state');
const form = document.getElementById('dynamic-form');
const plantsList = document.getElementById('plants-list');
const submitButton = form.querySelector('button[type="submit"]');

// Populate states based on selected country
countrySelect.addEventListener('change', function () {
    const selectedCountry = this.value;

    // Reset the state dropdown and disable it initially
    stateSelect.innerHTML = '<option value="">--Select Region--</option>';
    stateSelect.disabled = true;
    submitButton.disabled = true;

    // Check if the selected country exists in the plantData
    if (selectedCountry && plantData[selectedCountry]) {
        // Enable the state dropdown
        stateSelect.disabled = false;

        // Populate the state options
        const regions = Object.keys(plantData[selectedCountry]);
        regions.forEach(region => {
            const option = document.createElement('option');
            option.value = region;
            option.textContent = region.charAt(0).toUpperCase() + region.slice(1);
            stateSelect.appendChild(option);
        });
    }
});

// Enable the submit button when a region is selected
stateSelect.addEventListener('change', function () {
    if (this.value) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
});

// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Clear the previous list of plants
    plantsList.innerHTML = '';

    // Get selected country and region
    const selectedCountry = countrySelect.value;
    const selectedRegion = stateSelect.value;

    if (selectedCountry && selectedRegion) {
        // Fetch plants for the selected country-region combination
        const plants = plantData[selectedCountry][selectedRegion] || [];

        // Display the plants

        plants.forEach(plant => {
            const plantItem = document.createElement('div');
            plantItem.className = 'plant-item';
            plantItem.textContent = plant;

            plantsList.appendChild(plantItem);
        });
    }
});


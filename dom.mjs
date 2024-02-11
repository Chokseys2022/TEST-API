import { fetchRandomDog } from './api.mjs'; // Importing fetchRandomDog function from api.mjs

export function displayDogImage(imageUrl) { // Exporting displayDogImage function
    const dogResult = document.getElementById('dog_result'); // Getting the dog result element
    dogResult.innerHTML = `<img src="${imageUrl}" alt="dog" />`; // Setting inner HTML to display the dog image
}

export function setupEventListeners() { // Exporting setupEventListeners function
    const dogBtn = document.getElementById('dog_btn'); // Getting the dog button element
    dogBtn.addEventListener('click', async () => { // Adding click event listener to the button
        try {
            const imageUrl = await fetchRandomDog(); // Fetching random dog image URL
            displayDogImage(imageUrl); // Displaying the fetched dog image
        } catch (error) {
            console.error('Error getting dog image:', error); // Handling errors if any occur during fetching
            // Handle error, maybe display an error message to the user
        }
    });
}

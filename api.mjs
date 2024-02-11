export async function fetchRandomDog() { // Exporting asynchronous function fetchRandomDog
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random'); // Fetching random dog image from Dog CEO API
        const data = await response.json(); // Parsing response as JSON
        return data.message; // Returning the image URL
    } catch (error) {
        console.error('Error fetching dog:', error); // Logging error if fetch fails
        throw error; // Rethrowing the error for handling elsewhere
    }
}

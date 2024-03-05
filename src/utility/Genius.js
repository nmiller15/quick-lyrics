const Genius = {
    // * Method calls Search endpoint at Genius API and returns a promise
    // * Takes user input as an argument
    // * Returns a promise that resolves to a response object containing an array of 'hits'
    search(userInput) {

        // * Constructs a promise, allowing for async `await` in App.js
        return new Promise((resolve, reject) => { 

            // * Add the search term, userInput into the URL to fetch from the API
            const q = userInput.replace(/ /g, '%20')
            const url = `https://genius-song-lyrics1.p.rapidapi.com/search/?q=${q}&per_page=10&page=1`
            const mockUrl = 'https://run.mocky.io/v3/85ba0668-9e08-4b86-8f6a-255e7593ba78';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'e78f998381mshb646bf7302bb1d8p18dbaajsnae17cc2a5bc6',
                    'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
                }
            };
            
            // * fetches Genius API search results
            //! toggle this with mock variable
            fetch(url, options).then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                console.log('resolved', response);
                return response.json();   
            }).then(data => {
                console.log(data);
                resolve(data);
            }).catch((err) => {
                console.log('rejected', err)
                reject(err);
            })
        })
    },

    // * Method calls Song Lyrics endpoint at Genius API
    // * Takes song id as an argument
    // * Returns a Promise that resolves to an object containing formatted lyrics
    getLyrics(id) {
        
        // * Constructs a promise allowing for async `await` in App.js
        return new Promise ((resolve, reject) => {
            

            // * add id into URL to fetch from the API 
            const url = `https://genius-song-lyrics1.p.rapidapi.com/song/lyrics/?id=${id}&text_format=plain`;
            const mockUrl = 'https://run.mocky.io/v3/89229194-4759-496f-95a5-d37b85a22c83'
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'e78f998381mshb646bf7302bb1d8p18dbaajsnae17cc2a5bc6',
                    'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
                }
            };

            // * fetches Genius API lyrics results
            fetch(url, options).then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                } 
                console.log('resolved', response);
                return response.json();
            }).then((data) => {
                console.log(data);
                resolve(data);
            }).catch((err) => {
                console.log('rejected', err);
                reject(err);
            })
        });
    }
}

export default Genius;
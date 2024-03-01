const Genius = {
    search(userInput) {
        return new Promise((resolve, reject) => { 

            // * Add the search term, userInput into the URL to fetch from the API
            const q = userInput.replace(/ /g, '%20')
            const url = `https://genius-song-lyrics1.p.rapidapi.com/search/?q=${q}&per_page=10&page=1`
            const mockUrl = 'https://run.mocky.io/v3/85ba0668-9e08-4b86-8f6a-255e7593ba78';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '913baa68b2mshee77d60e97c2da8p182161jsne2d8a247ca25',
                    'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
                }
            };
            
            // * fetching Genius API search results
            //! toggle this with mock variable
            console.log(mockUrl);
            console.log(options)
            fetch(mockUrl, options).then((response) => {
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
        
    // accepts an object notation: [searchResult].response.hits[i]
    async returnId(selectedObject) {
        const id = await selectedObject.result.id;
        return id;
    },

    async getLyrics(id) {
        const url = `https://genius-song-lyrics1.p.rapidapi.com/song/lyrics/?id=${id}&text_format=plain`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '913baa68b2mshee77d60e97c2da8p182161jsne2d8a247ca25',
                'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.text();
            const resultObject = JSON.parse(result);
            const lyrics = resultObject.lyrics.lyrics.body.plain;

            return lyrics;
        } catch (error) {
            console.error(error);
        }
    }
}

export default Genius;
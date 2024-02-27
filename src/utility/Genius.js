import mockLyricData from "../mock/mockLyricData";

const Genius = {
    async search(userInput) {
        // * Add the search term, userInput into the URL to fetch from the API
        const q = userInput.replace(/ /g, '%20')
        const url = `https://genius-song-lyrics1.p.rapidapi.com/search/?q=${q}&per_page=10&page=1`
        const mockUrl = '../mock/mockSearchResultData.json';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '913baa68b2mshee77d60e97c2da8p182161jsne2d8a247ca25',
                'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
            }
        };

        // * fetching Genius API search results
        //! toggle this with mock variable
        try {
            const response = await fetch(mockUrl, options);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const result = await response.text();
            console.log(result);
            // * convert json response string to a JavaScript object
            const searchResults = JSON.parse(result)
            return searchResults; 
        } catch (error) {
            throw new Error('Error fetching search results')
        }

    },

    // accepts an object notation: [searchResult].response.hits[i]
    async returnId(selectedObject) {
        const id = await selectedObject.result.id;
        return id;
    },

    async getLyrics(id) {
        
    }
}

export default Genius;
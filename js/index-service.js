'use strict';

const STORAGE_KEY = 'userCache';

function getVideos() {
    var userCache = loadFromStorage(STORAGE_KEY);
    if (userCache) {
        console.log('No need to fetch, retrieving from Cache');
        return Promise.resolve(userCache);
    } else {
        axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=AIzaSyBPGn1dvvm2xfagT0QeBffc6_EehY3uAl0')
            .then(res => {
                console.log('res.data.items',res.data.items);
                userCache= res.data.items;
                saveToStorage(STORAGE_KEY, userCache)
                n              
                return res.data.items;
            })
    }
}

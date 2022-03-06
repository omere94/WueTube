'use strict';

// https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=AIzaSyBPGn1dvvm2xfagT0QeBffc6_EehY3uAl0

function init() {
    getVideos().then(renderVideos)
}

function renderVideos(movies) {
    console.log(movies)
    var strHtml = ''
    movies.forEach(movie => {
        strHtml += ` <div class="video-box" onclick="onVideoClicked('${movie.id.videoId}')">
        <iframe width="190px" height="150px" src="https://www.youtube.com/embed/${movie.id.videoId}">
        </iframe>
        <span>${movie.snippet.channelTitle}</span>
    </div>`
    });
    document.querySelector('.videos').innerHTML = strHtml
}

function renderMainVideo(id) {
    console.log(id);
    var strHtml = `<div class="main-video-box")">
    <iframe width="500px" height="400px" src="https://www.youtube.com/embed/${id}">
    </iframe>
</div>`
    document.querySelector('.main-video').innerHTML = strHtml
}

function onVideoClicked(id) {
    renderMainVideo(id)
}
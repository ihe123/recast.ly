// TODO: Render the `App` component to the DOM

//ReactDOM.render(<App searchYoutube = {window.searchYoutube} API_KEY = {window.YOU}/>, document.getElementById("app"));


ReactDOM.render(<App API_KEY={window.YOUTUBE_API_KEY} searchYouTube={window.searchYouTube}/>, document.getElementById("app"));
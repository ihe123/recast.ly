/*var App = () => (
  <div>
    <Nav />
    <div className="col-md-7">
      
    </div>
    <div className="col-md-5">
      
    </div>
  </div>
);*/

class App extends React.Component {

  constructor(props){

		super(props);
		this.state={
			currentVideo: window.fakeVideoData[0],
			videoList: window.fakeVideoData
	  }
    this.onVideoItemClick = this.onVideoItemClick.bind(this);
	}

	
		componentDidMount (){
			this.getYouTubeVideos("cats");
		}

    getYouTubeVideos (query){
  	 var obj = {
				key: this.props.API_KEY,
				query: query,
				max: 5
			}
			this.props.searchYouTube(obj, function(videos){
					console.log(videos)
			},this);
  }
	
  onVideoItemClick(video){
  	// console.log(video);
		this.setState({
			currentVideo: video	
		});
	}

  render(){
		return (
			<div>
		    <Nav />

		    <div className="col-md-7">
		    	<VideoPlayer video={this.state.currentVideo}/>
		    </div>

		    <div className="col-md-5">
		    	<VideoList videos={this.state.videoList} something={this.onVideoItemClick}/>
		    </div>

		  </div>
	  );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

// ReactDOM.render(<App  />, document.getElementById("app"));

//<VideoPlayer/> 5
//  8
//videos={window.fakeVideoData}
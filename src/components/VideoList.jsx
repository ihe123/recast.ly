
var VideoList = (props) => {
  console.log(props.something)
  return(
    <div className="video-list media">
      {

       props.videos.map(video => <VideoListEntry video = {video} something2 = {props.something}/>)
        // props.videos.map(function(video){
        //  // (<VideoListEntry video={video} something2 = {props.something})/>)
        //  // });
    //console.log(result)
       }  
    </div>
  );

};

 // console.log(props.videos)

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;

//
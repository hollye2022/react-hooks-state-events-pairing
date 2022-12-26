import video from "../data/video.js";
import Body from "./Body.js";
import Comments from "./Comments.js";


function App() {
  console.log("Here's your data:", video);
  console.log(video.title)

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={"https://www.youtube.com/embed/dpw9EHDh2bM"}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
    <Body video={video}/>
    <Comments video={video} />
    </div>
  );
 
}

export default App;

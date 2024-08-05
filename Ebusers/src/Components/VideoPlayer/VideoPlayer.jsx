import Video from "../../assets/video.mp4";
import "./VideoPlayer.css";

const VideoPlayer = () => {
  return (
    <div className="video-player">
      <video src={Video} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;

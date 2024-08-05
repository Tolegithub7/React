import Video from "../../assets/video.mp4";
import "./VideoPlayer.css";
import PropTypes from "prop-types";

const VideoPlayer = ({ playState }) => {
  return (
    <div className={`video-player ${playState ? "" : "hide"}`}>
      <video src={Video} autoPlay muted controls></video>
    </div>
  );
};

VideoPlayer.propTypes = {
  playState: PropTypes.bool,
  setPlayState: PropTypes.func.isRequired,
};

VideoPlayer.defaultProps = {
  playState: false,
};

export default VideoPlayer;

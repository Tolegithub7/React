import { useRef } from "react";
import Video from "../../assets/video.mp4";
import "./VideoPlayer.css";
import PropTypes from "prop-types";

const VideoPlayer = ({ playState, setPlayState }) => {
  const player = useRef(null);
  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  };
  return (
    <div
      className={`video-player ${playState ? "" : "hide"}`}
      ref={player}
      onClick={closePlayer}
    >
      <video src={Video} autoPlay muted controls></video>
    </div>
  );
};

VideoPlayer.propTypes = {
  playState: PropTypes.bool,
  setPlayState: PropTypes.func.isRequired,
};

VideoPlayer.defaultProps = {
  playState: true,
};

export default VideoPlayer;

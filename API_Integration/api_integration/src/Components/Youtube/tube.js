import React from "react";
import "./tube.css";

function tube() {
  return (
    <div className="AllVideosWrapper">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12">
            <div className="title-wrapper">
              Latest Videos <br />
              <div className="video-card">
                <div className="thumbnail">
                  <img src="#" alt="Video Thumbnail" />
                </div>
                <div className="video-details">
                  <h2>title</h2>
                  <p>description</p>
                </div>{" "}
                <br /> <br />
                <div className="thumbnail">
                  <img src="#" alt="Video Thumbnail" />
                </div>
                <div className="video-details">
                  <h2>title</h2>
                  <p>description</p>
                </div>{" "}
                <br /> <br />
                <div className="thumbnail">
                  <img src="#" alt="Video Thumbnail" />
                </div>
                <div className="video-details">
                  <h2>title</h2>
                  <p>description</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default tube;

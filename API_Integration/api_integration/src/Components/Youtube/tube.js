import React from "react";
import "./tube.css";

// function tube() {
//   return (
//     <div className="AllVideosWrapper">
//       <div className="container">
//         <div className="row justify-content-center text-center">
//           <div className="col-12">
//             <div className="title-wrapper">
//               Latest Videos <br />
//               <div className="video-card">
//                 <div className="thumbnail">
//                   <img src="#" alt="Video Thumbnail" />
//                 </div>
//                 <div className="video-details">
//                   <h2>title</h2>
//                   <p>description</p>
//                 </div>{" "}
//                 <br /> <br />
//                 <div className="thumbnail">
//                   <img src="#" alt="Video Thumbnail" />
//                 </div>
//                 <div className="video-details">
//                   <h2>title</h2>
//                   <p>description</p>
//                 </div>{" "}
//                 <br /> <br />
//                 <div className="thumbnail">
//                   <img src="#" alt="Video Thumbnail" />
//                 </div>
//                 <div className="video-details">
//                   <h2>title</h2>
//                   <p>description</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default tube;

import { useEffect, useState } from "react";

const apiKey =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=20&order=date&key=AIzaSyAZGUzDR5DfFCXKPU9TQkhjRQD-r2c3ihs";

function Tube() {
  const [youTubeVideos, setYouTubeVideos] = useState([]);

  useEffect(() => {
    fetch(apiKey)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setYouTubeVideos(data.items);
      });
  }, []);

  console.log("the out put is: ", youTubeVideos);

  return (
    <section className="youtubeVideosWrapper">
      <div className="allVideosWrapper">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <div className="title-wrapper ">
                <br />
                <h1>Latest Video</h1>
                <br />
              </div>
            </div>
            {youTubeVideos.map((singleVideo, index) => {
              let vidId = singleVideo.id.videoId;
              let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
              return (
                <div key={index} className="col-sm-12 col-md-6 col-lg-4">
                  <div className="singleVideoWrapper">
                    <div className="videoThumbnail">
                      <a href={vidLink} target="_blank" rel="noreferrer">
                        <img
                          src={singleVideo.snippet.thumbnails.high.url}
                          alt="thumbnails"
                        />
                      </a>
                    </div>
                    <div className="videoInfoWrapper">
                      <div className="videoTitle">
                        <a href={vidLink} target="_blank" rel="noreferrer">
                          {singleVideo.snippet.title}
                        </a>
                      </div>
                      <div className="videoDesc">
                        {singleVideo.snippet.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tube;

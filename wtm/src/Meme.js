import React from 'react';
import Webcam from "react-webcam";

import style from './Meme.css'


const videoConstraints = {
    facingMode: "user"
  };

const WebcamCapture = () => {
    const webcamRef = React.useRef(null);
   
    const capture = React.useCallback(
      () => {
        const imageSrc = webcamRef.current.getScreenshot();
        console.log(imageSrc);
      },
      [webcamRef]
    );
   
    return (
      <>
        <Webcam
          className={style.wcam}
          audio={false}
        //   height={720}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={640}
          videoConstraints={videoConstraints}
        />
      </>
    );
  };



export default class Meme extends React.Component {

    render() {

        return (
            <div style={{textAlign: "center", backgroundColor: "red", width: "100%", height: "100%", color: "white"}}>
                <h1 style={{fontSize: "250%", paddingTop: "40px"}}>It's you</h1>
                <WebcamCapture />
                {<script>confetti.start()</script>}
                <h1 style={{fontSize: "250%", paddingBottom: "40px"}}>You're the Meme</h1>
            </div>
        );
    }
}
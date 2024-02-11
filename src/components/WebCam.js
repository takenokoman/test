/* src/components/WebCam.js */
import 'bulma/css/bulma.css'
import React, { useEffect, useState, useRef } from 'react'
import jsQR from "jsqr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const WebCam = () => {
    const [qrcode, setQrcode] = useState();
    const videoRef = useRef({});
    const pause = () => {
        videoRef.current.pause();
    }
    const iconSize = "1x";
    const play = () => {
        videoRef.current.play();
    }
    const getCaputure = () => {
        const canvas = new OffscreenCanvas(1080, 780);
        const context = canvas.getContext('2d');
        //console.log(videoRef.current)
        context.drawImage(videoRef.current, 0, 0, 1080, 780);
        const imageData = context.getImageData(0, 0, 1080, 780);
        const qr = jsQR(imageData.data, imageData.width, imageData.height);
        if (qr) {
            console.log(qr.data);  
        }
        return qr;
    }
    
    const tick = ()=> {
        const code = getCaputure();
        setQrcode(code);
        requestAnimationFrame(tick);
    }
    
    const streamMedia = async () => {
        const media = await navigator.mediaDevices.getUserMedia({ video: { width: { max: 400 } }, audio: false })
        //document.getElementById('video').srcObject
        videoRef.current.srcObject = media;
        //requestAnimationFrame(tick);
    }
    
    useEffect(() => {
        if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
            console.log("Let's get this party started");debugger
            streamMedia()
        }
    }, [])

    return (
        <div>
            <video id="video" ref={videoRef} style={styles.camera} autoPlay></video>
            <div style={styles.container}>
                <button className="button" onClick={() => getCaputure()}><FontAwesomeIcon icon={["fal", "camera-viewfinder"]} style={styles.icon} size={iconSize} /></button>
                <button className="button" onClick={() => play()}><FontAwesomeIcon icon={["fal", "play"]} style={styles.icon} size={iconSize} /></button>
                <button className="button" onClick={() => pause()}><FontAwesomeIcon icon={["fal", "pause"]} style={styles.icon} size={iconSize} /></button>
            </div>
            <p>{qrcode}</p>
        </div>
        
    )
}

const styles = {
    camera: { width: "100%", maxWidth: 400, margin: '0 auto', padding: 0, position: "fixed", top: 20, left: 0, right: 0 },
    container: { width: 400, margin: '0 auto', position: "fixed", bottom: 50, display: 'flex', left: 0, right: 0, justifyContent: 'center', padding: 20},
}

export default WebCam

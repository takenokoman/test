/* src/App.js */
import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import WebCam from '../components/WebCam'

const Camera = () => {
  
  useEffect(() => {
  }, [])
  
  
  return (
    <main>
        <h1 style={styles.title} >Cameraaaaaaaaa!</h1>
        <WebCam />
        <Footer />
    </main>
  )
}

const styles = {
  title: { width: "100%", maxWidth: 400, margin: '0 auto', padding: 0, position: "fixed", left: 0, right: 0 },
}

export default Camera

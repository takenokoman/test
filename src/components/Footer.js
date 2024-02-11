/* src/App.js */
import 'bulma/css/bulma.css'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const iconSize = "1x";
const Footer = () => {
    useEffect(() => {}, [])

    return (
        <div style={styles.footer}>
                <Link to="/"><FontAwesomeIcon icon={["fal", "house"]} style={styles.icon} size={iconSize} /></Link>
                <Link to="/map"><FontAwesomeIcon icon={["fal", "location-dot"]} style={styles.icon} size={iconSize}/></Link>
                <Link to="/camera"><FontAwesomeIcon icon={["fal", "camera-retro"]} style={styles.icon} size={iconSize}/></Link>
                <Link to="/user"><FontAwesomeIcon icon={["fal", "user"]} style={styles.icon} size={iconSize}/></Link>
        </div>
    )
}
const styles = {
    footer: { maxWidth: 400, margin: '0 auto', padding: 20, position: "fixed", display: "flex", alignItems: "stretch", justifyContent: "space-between", left: 0, right: 0, bottom: 0, zIndex: 10, backgroundColor: "#fff" },
    column: { height: 40 },
    icon: { width: "100%", hight: 40, color: "#696969" },
}

export default Footer

/* src/App.js */
import React, { useEffect, useState } from 'react'
import { Authenticator } from '@aws-amplify/ui-react'
import Footer from '../components/Footer.js'

const initialState = { name: '', description: '' }

const User = () => {

  useEffect(() => {
  }, [])


  return (
    <div style={styles.container}>
        <h1>Userrrrrrrrrrrrrrrrrrrrrr!</h1>
        <Footer />
    </div>
  )
}
const styles = {
    container: { maxWidth: 400, margin: '0 auto', position: "fixed", display: 'flex', left: 0, right: 0, justifyContent: 'center', padding: 20},
}

export default User

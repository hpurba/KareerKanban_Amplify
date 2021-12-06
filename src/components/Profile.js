import React from 'react'
import { Link } from 'gatsby'
import { getCurrentUser } from '../utils/auth'

const Profile = () => {
  const user = getCurrentUser()
  console.log('user:', user)
  return (
    <div style={styles.profile}>
      <h1>Profile Details</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone_number}</p>
      <p>Username: {user.username}</p>
      {/* <Link to="/app/home">Home</Link> */}
    </div>
  )
}

const styles = {
  profile: {
    margin: '2em',
  }
}

export default Profile
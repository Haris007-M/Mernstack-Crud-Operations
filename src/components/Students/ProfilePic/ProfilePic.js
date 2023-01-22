import React from 'react'
import './ProfilePic.css'
const ProfilePic = ({ imageUrl }) => {
  return (
    <div>
      <img 
        src={imageUrl}
        alt="profile"
      />
    </div>
  )
}

export default ProfilePic

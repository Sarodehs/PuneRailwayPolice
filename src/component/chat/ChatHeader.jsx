import React from 'react'

const ChatHeader = ({user}) => {
  return (
    <div className="align-items-start py-2 px-4 w-100 border-bottom d-lg-block sticky-top bf-white">
    <div className="d-flex align-items-center py-1">
      <div className="position-relative">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ9rtFvLQlfBgovqovw7Bwt2Uf8roe6RC6Ew&usqp=CAU"
          alt={user.username}
          className="rounded-circle mx-2"
          width="50px"
          height="50px"
        />
      </div>
      <div className="flex-grow-1">
        <strong>Logged in as {user.username}</strong>
      </div>
    </div>
  </div>
  )
}

export default ChatHeader
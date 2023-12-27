import React from 'react'

const ChatContainer = (props) => {
  return (
    <div className="card w-100">
    <div className="row" style={{ height: "90vh" }}>
      <div className="d-flex flex-column col-12 col-lg-12 col-xl-12 chat-window">
      {props.children}
      </div>
    </div>
  </div>
  )
}

export default ChatContainer
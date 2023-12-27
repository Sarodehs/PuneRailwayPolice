import React from "react";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatContainer from "./ChatContainer";
import ScrollableFeed from "react-scrollable-feed"

const Chat = ({ user, message,setMessage, messages, sendMessage }) => {
  console.log(message);
  return (
    <ChatContainer>
      <ChatHeader user={user} />
      <div className="position-relative overflow-auto">
      <ScrollableFeed>
        <div className="d-flex flex-column p-4">
          {messages.map((message, index) => {
            return message.type === "userStatus" ? (
              <div className="text-center">
                <span className="badge bg-info">
                  {message.userId === user.userId
                    ? "You have Joined!"
                    : `${message.username} has Joined!`}
                </span>
              </div>
            ) : (
              <div
                key={index}
                className={
                  message.userId === user.userId
                    ? "chat-message-right pb-4"
                    : "chat-message-left pb-4"
                }
              >
                <div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ9rtFvLQlfBgovqovw7Bwt2Uf8roe6RC6Ew&usqp=CAU"
                    alt={message.username}
                    title={message.username}
                    className="rounded-circle mx-2"
                    width="50px"
                    height="50px"
                  />
                  <div className="text-muted small text-nowrap mt-2">
                    12:00 AM
                  </div>
                </div>

                <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                  <div className="font-weight-light mb-2">
                    { message.userId === user.userId ? "You": message.username}
                  </div>
                  {message.message}
                </div>
              </div>
            );
          })}
        </div>
        </ScrollableFeed>
      </div>
      <ChatInput message={message} sendMessage={sendMessage} setMessage={setMessage}/>
    </ChatContainer>
  );
};

export default Chat;

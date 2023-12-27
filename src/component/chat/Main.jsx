import Chat from "./Chat";
import Login from "./Login";
import { useState, useEffect } from "react";
import Header from '../User/Header'
import Footer from '../User/Footer'
const Main = ({ socket }) => {
  const [newUser, setNewUser] = useState("");
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("users", (users) => {
      const messagesArr = [];
      for (let { userId, username } of users) {
        const newMessage = { type: "userStatus", userId, username };
        messagesArr.push(newMessage);
      }
      setMessages([...messages, ...messagesArr]);
      setUsers(users);
    });

    socket.on("session", ({ userId, username }) => {
      setUser({ userId, username });
    });

    socket.on("user connected", ({ userId, username }) => {
      const newMessage = { type: "userStatus", userId, username };
      setMessages([...messages, newMessage]);
    });

    socket.on("new message", ({ userId, username, message }) => {
      const newMessage = {
        type: "message",
        userId: userId,
        username: username,
        message,
      };
      setMessages([...messages, newMessage]);
    });
  }, [socket, messages]);

  const handleChange = (e) => {
    setNewUser(e.target.value);
  };

  function logNewUser() {
    socket.auth = { username: newUser };
    socket.connect();
  }

  function sendMessage() {
    socket.emit("new message", message);
    const newMessage = {
      type: "message",
      userId: user.userId,
      username: user.username,
      message,
    };
    setMessages([...messages, newMessage]);
    setMessage("");
  }

  return (
    <main className="content">
      <div >
    <Header/>
    <div className="">

        {user.userId && (
          <Chat
            messages={messages}
            user={user}
            message={message}
            sendMessage={sendMessage}
            setMessage={setMessage}
          />
        )}

        {!user.userId && (
          <Login
            handleChange={handleChange}
            logNewUser={logNewUser}
            newUser={newUser}
          />
        )}
</div>
        <Footer/>
      </div> 
    </main>
  );
};

export default Main;

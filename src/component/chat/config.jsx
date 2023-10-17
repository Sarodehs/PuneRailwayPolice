// import { createChatBotMessage } from 'react-chatbot-kit';

// const config = {
//   initialMessages: [createChatBotMessage(`Hello world`)],
// };

// export default config;



// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'ExcitementBot';

const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`)],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
};

export default config;
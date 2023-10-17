// import React from 'react';

// const MessageParser = ({ children, actions }) => {
//   const parse = (message) => {
//     console.log(message);
//   };

//   return (
//     <div>
//       {React.Children.map(children, (child) => {
//         return React.cloneElement(child, {
//           parse: parse,
//           actions: {},
//         });
//       })}
//     </div>
//   );
// };

// export default MessageParser;



// in MessageParser.jsx

// in MessageParser.js
import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.includes('hi')) {
      actions.handleHello();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
import React from 'react'
import Header from './Header'
import Footer from './Footer'

import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from '../chat/config'
import MessageParser from '../chat/MessageParser'
import ActionProvider from '../chat/ActionProvider'
const BuddyBench = () => {
  return (
    <div>
        <Header/>  {/* Officer′s Profile start */}
           <div class="row p-5 ">
            <div class="col-sm-3 card bg-light ">
                        <Chatbot
                    config={config}
                    messageParser={MessageParser}
                    actionProvider={ActionProvider}/>
            </div>
            <div class="col-sm-9 card bgcolorone">
            <img src="/assets/Image/helppolice2.jpg" class="card-img-top mx-auto pt-3" alt="card" />
            </div>
          </div>
          {/* Officer′s Profile end */}
        <Footer/>

    </div>
  )
}

export default BuddyBench
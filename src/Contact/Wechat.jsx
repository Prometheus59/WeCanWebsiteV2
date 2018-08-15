import React from "react";
import WeChatLogo from "../images/WeCanChatLogo.jpg";

export default class WeChat extends React.Component {
  render() {
    return (
    <div id='wechat'>
    <h2>WeChat QR Code</h2>
        <img id='wechatlogo' src={WeChatLogo} alt="WeCan Chat Logo" />
        <h3>ID: oyeswecan</h3>
    </div>
    )
  }
}

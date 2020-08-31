import React from "react";
import PropTypes from "prop-types";

//Mail:メールの中身をrenderingするため

//メールの緊急度判定
const checkPrioriy = (priority) => {
  const planets = {
    3: "緊急",
    2: "高",
    1: "中",
    0: "低",
  };
  return planets[priority];
};

//Dateフォーマット変更
const dateFormat = require("dateformat");

function Mail({
  key,
  messageSubject,
  messageSender,
  messageAt,
  messagePriority,
  messageContent,
}) {
  return (
    <div className="mail">
      <div className="mail__data">
        <h3 className="mail__title">{messageSubject}</h3>
        <h5 className="mail__sender">from: {messageSender}</h5>
        <h5 className="mail__getTime">
          {dateFormat(messageAt, "dddd, mmmm dS, yyyy, h:MM:ss TT")}
          ・Priority:{checkPrioriy(messagePriority)}
        </h5>
        <p className="mail_contents">{messageContent}</p>
      </div>
    </div>
  );
}
Mail.prototype = {
  id: PropTypes.string.isRequired,
  messageSubject: PropTypes.string.isRequired,
  messageSender: PropTypes.string.isRequired,
  messageAt: PropTypes.string.isRequired,
  messagePriority: PropTypes.string.isRequired,
  messageContent: PropTypes.string.isRequired,
};
export default Mail;

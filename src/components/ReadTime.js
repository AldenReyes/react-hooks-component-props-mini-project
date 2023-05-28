import React from "react";

const emojiCounter = (num, emoji) => {
  let emojiString = "";
  for (let i = 0; i < num; i++) {
    emojiString += emoji;
  }
  return emojiString;
};

const ReadTime = ({ minutes }) => {
  if (minutes >= 30) {
    const emojiCount = Math.floor(minutes / 10);
    return <>{emojiCounter(emojiCount, "🍱")} {minutes} min to read</>;
  } else if (minutes < 30) {
    const emojiCount = Math.floor(minutes / 5);
    return <>{emojiCounter(emojiCount, "☕️")} {minutes} min to read</>;
  }
};

export default ReadTime;

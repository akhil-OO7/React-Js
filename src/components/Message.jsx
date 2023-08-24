import React from "react";

const Message = (props) => {
  const { lang, lab } = props.info;
  return (
    <div>
      We are studying {lang} in {lab}
    </div>
  );
};

export default Message;

import React, { useState } from "react";

const MessageForm = ({ chatroomId, onSubmitForm }) => {
  const [message, setMessage] = useState("");

  function onChange(e) {
    const value = e.currentTarget.value;
    setMessage(value);
  }

  return (
    <form className="bg-white border-top d-flex p-3">
      <input
        className="form-control"
        placeholder="Enter your message here."
        value={message || ""}
        onChange={onChange}
      />
      <button
        className="btn btn-primary ml-2"
        disabled={!message || message === ""}
        onClick={event => {
          onSubmitForm({ chatroomId, message, event });
          setMessage("");
        }}
      >
        Post
      </button>
    </form>
  );
};

export default MessageForm;

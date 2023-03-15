import React from "react";
import axios from "axios";
import { useEffect } from "react";

function ChatPage() {
  //   const fetchChats = async () => {
  //     try {
  //       const { data } = await axios.get("http://localhost:5000/api/chat");
  //       console.log(data);
  //       return data;
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  useEffect(() => {
    // fetchChats();
    axios
      .get("http://localhost:5000/api/chat")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return <div>ChatPage</div>;
}

export default ChatPage;

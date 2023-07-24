import { Box } from "@mui/material";
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { getConversation } from "../../../service/api";
import { UserContext } from '../../../context/UserProvider';


const ChatBox = () => {

const { account } = useContext(AccountContext);
const { person } = useContext(UserContext);
const [conversation, setConversation] = useState({});

useEffect(() => {
const getConversationDetails = async () => {
  let data = await getConversation ({ senderId: account.sub , receiverId: person.sub });
setConversation(data);
}
  getConversationDetails();
}, [person.sub]);

    return(
<Box style={{ height: '75%' }}>
<ChatHeader person={person} />
<Messages person={person} conversation={conversation} />
</Box>
    )
}

export default ChatBox;
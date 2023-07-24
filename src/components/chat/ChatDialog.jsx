import { Box, Dialog } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../../context/UserProvider";

import Menu from "./menu/Menu";
import EmptyChat from "./chat/EmptyChat";
import styled from "@emotion/styled";
import ChatBox from "./chat/ChatBox";


const Component = styled(Box)`
display: flex;
`;

const LeftComponent = styled(Box)`
min-width: 450px;
`;

const RightComponenet = styled(Box)`
width: 73%;
min-width: 300px;
height: 100%;
border-left: 1px solid rgb(0, 0, 0, .14);
`;

const dialogStyle = {
    height: '96%',
    width: '100%',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: 0,
    baxShadow: 'none',
    overFlow: 'hidden'

}


const ChatDialog = () => {

    const { person } = useContext(UserContext);

    return(
<Dialog 
open={true}
BackdropProps={{style: {backgroundColor: 'unset'}}}
PaperProps={{ sx: dialogStyle}}
maxWidth={'md'} >


    <Component>
<LeftComponent>
<Menu />
</LeftComponent>

<RightComponenet>
{ Object.keys(person).length ? <ChatBox /> : <EmptyChat />}
</RightComponenet>

    </Component>


</Dialog>
    )
}


export default ChatDialog;
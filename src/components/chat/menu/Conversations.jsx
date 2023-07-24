import { useEffect, useState, useContext } from "react";
import { Socket } from "socket.io-client";
import { getUsers } from "../../../service/api";
import Conversation from "./Conversion";
import { Box, Divider, styled } from "@mui/material";
import { AccountContext } from "../../../context/AccountProvider";

const Component = styled(Box)`
height: 81vh,
overflow: overlay;
`;

const StyledDivider = styled(Divider)`
margin: 0 0 0 70px;
background: #e9edef;
opacity: .6;
`;

const Conversations = ({ text }) => {

    const [users, setUsers] = useState([]);

    const { account, socket, setActiveUsers } = useContext(AccountContext);

    useEffect(() => {
        const fetchData = async () => {
            let data = await getUsers();
            let filteredData = data.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
            setUsers(filteredData);
        }; fetchData();
    }, [text]);

    useEffect(() => {
socket.current.emit('addUser', account);
socket.current.on("getUsers", users => {
setActiveUsers(users);
})
    }, [account])

    return (
        <Component>
            {
               users && users.map((user, index) => (
                    user.sub !== account.sub &&
                    <>
                        <Conversation
                            user={user} /> {
                                users.length !== (index + 1) && 
                            
                            <StyledDivider />}
                            </>
                ))
            }
        </Component>
    )
}

export default Conversations;
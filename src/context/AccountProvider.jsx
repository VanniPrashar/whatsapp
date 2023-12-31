import { useState, useRef, useEffect } from "react";
import { createContext } from "react";
import { io } from 'socket.io-client';


export const AccountContext = createContext(null);


const AccountPovider = ({ children }) => {

const [account, setAccount] = useState();
const [showloginButton, setShowloginButton] = useState(true);
const [showlogoutButton, setShowlogoutButton] = useState(false);
const [activeUsers, setActiveUsers] = useState([]);

    const [newMessageFlag, setNewMessageFlag] = useState(false);

const socket = useRef();

useEffect(() => {
    socket.current = io('ws://localhost:9000');
}, []
)

    return(
<AccountContext.Provider value={{
    account,
    setAccount,
    showloginButton,
    setShowloginButton,
    showlogoutButton,
    setShowlogoutButton,
    socket,
    activeUsers,
    setActiveUsers,
    newMessageFlag,
    setNewMessageFlag

}}>{children}
    </AccountContext.Provider>
    )
}

export default AccountPovider;
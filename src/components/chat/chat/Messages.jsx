import { useContext, useState, useEffect, useRef } from 'react';
import { AccountContext } from '../../../context/AccountProvider';
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import Footer from './Footer';
import Message from './Message';
import { getMessages, newMessages } from '../../../service/api';


const Wrapper = styled(Box)`
background-image: url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
background-size: 50%;
`;

const Component = styled(Box)`
height: 80vh;
overflow-y: scroll;
`;

const Container = styled(Box)`
padding: 1px 80px;
`;

const Messages = ({ person, conversation }) => {

    
    const [value, setValue] = useState();
    const [file, setFile] = useState();
    const [image, setImage] = useState('');
    const [messages, setMessages] = useState([]);
    const [incomingMessage, setIncomingMessage] = useState(null);

    const scrollRef = useRef();

    const { account, socket, newMessageFlag, setNewMessageFlag } = useContext(AccountContext);

useEffect(() => {
    socket.current.on('getMessage', data => {
setIncomingMessage({
    ...data, createAt: Date.now()
})
    })
}, [])

    useEffect(() => {
        const getMessageDetails = async () => {
           let data = await getMessages(conversation._id);
           setMessages(data);
        }
        getMessageDetails();
    }, [conversation._id, person._id, newMessageFlag]);
     
    useEffect(() => {
scrollRef.current?.scrollIntoView({ transition: 'smooth' })
    }, [messages]);

    useEffect(() => {
incomingMessage && conversation?.members?.includes(incomingMessage.senderId) &&
setMessages((prev) => [...prev, incomingMessage]);
    }, [incomingMessage, conversation]);

    const receiverId = conversation?.members?.find(member => member !== account.sub);

const sendText = async (e) => {
let code = e.keyCode || e.which;
if(!value) return;


if(code === 13){
    let message = {};
    if (!file) {
   message = {
        senderId: account.sub,
        receiverId: receiverId,
        conversationId: conversation._id,
        type: 'text',
        text: value
    }}
    else{
        message = {
            senderId: account.sub,
            receiverId: receiverId,
            conversationId: conversation._id,
            type: 'file',
            text: image
    };
}

    socket.current.emit('sendMessage', message);


    await newMessages(message);

    setValue('');
    setFile('');
    setImage('');
    setNewMessageFlag(prev => !prev)
}
}


    return(
<Wrapper>
    <Component>
        {
            messages && messages.map(message => (
                <Container ref={scrollRef}>
                <Message message={message}/>
                </Container>
            ))
        }

    </Component>

    <Footer 
    sendText={sendText}
    setValue={setValue}
    value={value}
    file={file}
    setFile={setFile}
    setImage={setImage}/>
    </Wrapper>
    )
}

export default Messages;

import { Dialog, Box, List, ListItem, Typography, styled } from "@mui/material";
import { addUser } from "../../service/api";

import { qrCodeImage } from "../../constants/data";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
import { GoogleLogin } from '@react-oauth/google';

import jwt_decode from "jwt-decode";

const Component = styled(Box)`
display: flex;
`;

const Container = styled(Box)`
padding: 56px 0 56px 56px;
`;

const Title = styled(Typography)`
font-size: 26px;
color: #525252;
font-weight: 300;
font-family: inherit;
margin-bottom: 25px;
`;

const StyledList = styled(List)`
& > li {
    padding: 0;
    margin-top:15px;
    font-size: 18px; 
    line-height: 28px;
    color: #4a4a4a;
}

`;

const QRCode = styled('img')({
height: 264,
width: 264,
margin: '50px 0 0 50px'

})


const dialogStyle = {
    height: '96%',
    marginTop: '12%',
    width: '60%',
    maxWidth: '100%',
    maxHeight: '100%',
    baxShadow: 'none',
    overFlow: 'hidden'

}



const LoginDialog = () => {

    const { setAccount, showloginButton, setShowloginButton, setShowlogoutButton } = useContext(AccountContext);

    const onLoginSuccess = async (res) =>{
        let decoded = jwt_decode(res.credential);
        setAccount(decoded);
        setShowloginButton(false);
        setShowlogoutButton(true);
       await addUser(decoded);

    };

    const onLoginFailure = (res) => {
        console.log('Login Failed', res);

    };

    return (
     
<Dialog 
open={true}
BackdropProps={{style: {backgroundColor: 'unset'}}}
maxWidth={'md'}
PaperProps={{ sx: dialogStyle}}>

   
        <Component>
            <Container>
            <Title>
                To use Whatsapp on your computer: </Title>

                <StyledList>
                    <ListItem>1. Open Whatsapp on your phone</ListItem>
                    <ListItem>2. Tap Menu  or Settings and select Whatsapp Web</ListItem>
                    <ListItem>3. Point your phone to this screen to capture the code</ListItem>
                </StyledList>
           
        </Container>
        <Box style={{ position: 'relative' }}>
            <QRCode src={qrCodeImage} />

            <Box style={{ position: 'absolute', top: '50%', transform: 'translateX(25%) translateY(-25%)' }}>
               {showloginButton ?
                <GoogleLogin 
                buttonText = ""
                onSuccess={onLoginSuccess}
                onError={onLoginFailure} 
                /> : null}
            </Box>
    </Box>
    </Component>


</Dialog>
    )
}

export default LoginDialog;
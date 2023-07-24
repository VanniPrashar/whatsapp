import styled from "@emotion/styled";
import { MoreVert, Search } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { defaultProfilePicture } from "../../../constants/data";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";

const Header = styled(Box)`
height: 44px;
background: #ededed;
padding: 8px 16px;
display: flex;
align-items: center;
`;

const Name = styled(Typography)`
margin-left: 12px !important;
`;

const Status = styled(Typography)`
margin-left: 12px !important;
font-size: 12px;
color: rgb(0, 0, 0, 0.6);
`;

const RightComponenet = styled(Box)`
margin-left: auto;
& > svg {
    padding: 8px;
    font-size: 24px;
    color: #000;
}
`;


const Image = styled('img')({
height: 40,
width: 40,
borderRadius: '50%',
objectFit: 'cover',
})


const ChatHeader = ({ person }) => {
const url = person.picture || defaultProfilePicture;
const { activeUsers } = useContext(AccountContext);

    return(
<Header>
    <Image src={url} alt="dp" />
    <Box>
        <Name>{person.name}</Name>
        <Status>{ activeUsers?.find(user => user.sub === person.sub) ? 'Online' : 'Offline' }</Status>
    </Box>
    <RightComponenet>
        <Search />
<MoreVert />
    </RightComponenet>
</Header>
    )
}

export default ChatHeader;
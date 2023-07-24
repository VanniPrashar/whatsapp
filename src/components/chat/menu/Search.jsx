import styled from "@emotion/styled";
import { Search as SearchIcon } from "@mui/icons-material";
import { Box, InputBase } from "@mui/material";


const Component = styled(Box)`
backgroound: #fff;
height: 45px;
border-bottom: 1px solid #F2F2F2;
display: flex;
align-items: center;
`;

const Icon = styled(Box)`
position: absolute;
height: 100%;
padding: 8px;
color: #919191;
`;

const Wrapper = styled(Box)`
background-color: #f0f2f5;
position: relative;
margin: 0 14px;
width: 100%;
border-radius: 10px;
`;

const InputField = styled(InputBase)`
width: 100%;
height: 15px;
padding: 16px;
padding-left: 65px;
font-size: 14px;
`;

const Search = ({ setText }) => {
return(
<Component>
<Wrapper>
<Icon>
<SearchIcon 
fontSize="small"/>
</Icon>
<InputField
placeholder="Search or start a new Chat" 
inputProps={{ 'aria-label': 'search' }}
onChange={(e) => setText(e.target.value)}/>
</Wrapper>

</Component>
)
}

export default Search;
import { HeaderContainer, ProfileImg } from "./styles";
import miniatura from "../../assets/profissao-programador-logo.jpg";
function ProfileHeader(){


    return(<HeaderContainer>
            <ProfileImg src={miniatura}/>

    </HeaderContainer>)
}

export default ProfileHeader;
import ProfileHeader from "../ProfileHeader";
import { HeaderContainer } from "../ProfileHeader/styles";
import { MessagesAreaContainer } from "./styles";

function MessagesBox(){

    return(<MessagesAreaContainer>
        <ProfileHeader/>
    </MessagesAreaContainer>
    )
}

export default MessagesBox;
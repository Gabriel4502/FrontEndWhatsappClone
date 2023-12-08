import ChatBox from "../../components/chat";
import MessagesBox from "../../components/messages-area";
import { BackgroundContainer, Container } from "./styles";

function Home(){





    return(
       <BackgroundContainer>
            <Container>
                <MessagesBox/>
                <ChatBox/>
            </Container>
       </BackgroundContainer>
    )
}

export default Home;
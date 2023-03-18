import Chat from "../../../components/Chat"
import ChatInput from "../../../components/ChatInput"

type Props ={
  params:{
    id:string
  }
}
function ChatPage({params:{id}}:Props) {

    return (
      <div className="flex flex-col h-screen overflow-hidden">
        {/* Chat */}
        <Chat key={id} chatId={id} />
        {/* ChatInput */}
        <ChatInput key={id} chatId={id}/>
      </div>
    )
  }
  
  export default ChatPage
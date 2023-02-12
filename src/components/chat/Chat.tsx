import {FC} from 'react'
import Header from "@/components/Header";
import ChatControls from "@/components/chat/ChatControls";
import ChatSection from "@/components/chat/ChatSection";

const Chat: FC = () => {

    return <>
        <section className="flex flex-col flex-auto border-l border-gray-800">
            <Header/>
            <div className="p-4 flex-1 overflow-y-scroll">
                <ChatSection/>
                <ChatSection/>
                <ChatSection/>
                <ChatSection/>
                <ChatSection/>
                <ChatSection/>
                <ChatSection/>
                <ChatSection/>
            </div>
            <ChatControls/>
        </section>
    </>
}

export default Chat

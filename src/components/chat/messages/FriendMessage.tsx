import {FC} from 'react'
import MessageControls from "@/components/chat/messages/MessageControls";

const FriendMessage: FC = () => {

    return <div className="flex items-center group text-gray-200">
        <p
            className="px-6 py-3 rounded-t-full rounded-r-full bg-gray-800 max-w-xs lg:max-w-md">
            Hey! How are you?
        </p>
        <MessageControls/>
    </div>
}

export default FriendMessage

import {FC} from 'react'
import MessageControls from "@/components/chat/messages/MessageControls";

const MyMessage: FC = () => {

    return <div className="flex items-center flex-row-reverse group">
        <p className="px-6 py-3 rounded-t-full rounded-l-full bg-blue-700 max-w-xs lg:max-w-md">Hey!
            How are you?</p>
        <MessageControls/>
    </div>
}

export default MyMessage

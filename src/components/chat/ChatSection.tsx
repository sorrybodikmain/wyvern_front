import {FC} from 'react'
import FriendMessage from "@/components/chat/messages/FriendMessage";
import MyMessage from "@/components/chat/messages/MyMessage";

const ChatSection: FC = () => {
    function randomDate(start: string) {
        return new Date(new Date(start).getTime() +
            Math.random() * (new Date().getTime() - new Date(start).getTime()))
    }

    function getRandomInt(max: number) {
        return Math.floor(Math.random() * max);
    }

    const friendMesg = Array(getRandomInt(5)).fill(0)
    return (
        <div>
            <p
                className="sticky top-0 my-1 p-3 text-center text-sm text-gray-500">
                SUN {randomDate('2012').toLocaleDateString()} PM
            </p>
            <div className="flex flex-row justify-start">
                {friendMesg.length > 0 && <div className="w-8 h-8 relative flex flex-shrink-0 mr-4">
                    <img className="shadow-md rounded-full w-full h-full object-cover"
                         src="https://randomuser.me/api/portraits/women/33.jpg"
                         alt=""
                    />
                </div>}
                <div className="messages text-sm text-gray-700 grid grid-flow-row gap-2">
                    {friendMesg
                        .map((value, index) => (<FriendMessage key={index}/>))}


                </div>
            </div>
            <div className="flex flex-row justify-end">
                <div className="messages text-sm text-white grid grid-flow-row gap-2">
                    {Array(getRandomInt(5)).fill(0)
                        .map((value, index) => (<MyMessage key={index}/>))}
                </div>
            </div>
        </div>
    )
}

export default ChatSection

import {FC} from 'react'
import {BiArrowFromBottom, BiDotsHorizontal, BiSmile} from "react-icons/bi";

const MessageControls: FC = () => {

    return <div className='mx-2 flex'>
        <button type="button"
                className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-1 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2">
            <BiDotsHorizontal className='w-full h-full'/>
        </button>
        <button type="button"
                className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-1 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2">
            <BiArrowFromBottom className='w-full h-full'/>
        </button>
        <button type="button"
                className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-1 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2">
            <BiSmile className='w-full h-full'/>
        </button>
    </div>
}

export default MessageControls

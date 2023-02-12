import {FC} from 'react'
import {AiFillInfoCircle} from "react-icons/ai";

const Header: FC = () => {


    return <>
        <div
            className="px-6 py-4 flex flex-row flex-none justify-between items-center shadow-lg shadow-gray-800">
            <div className="flex">
                <div className="w-12 h-12 mr-4 relative flex flex-shrink-0">
                    <img className="shadow-md rounded-full w-full h-full object-cover"
                         src="https://randomuser.me/api/portraits/women/33.jpg"
                         alt=""
                    />
                </div>
                <div className="text-sm">
                    <p className="font-bold">Scarlett Johansson</p>
                    <p>Active 1h ago</p>
                </div>
            </div>
            <a href="#"
               className="block rounded-full hover:bg-gray-700 bg-gray-800 w-10 h-10 p-2 ml-4">
                <AiFillInfoCircle className="w-full h-full"/>
            </a>
        </div>
    </>
}

export default Header

import {FC} from 'react'
import {AiFillEdit, AiOutlineSearch} from "react-icons/ai";
import {FaDragon} from "react-icons/fa";
import SidebarProfile from "@/components/sidebar/SidebarProfile";

const Sidebar: FC = () => {
    function getRandomInt(max: number) {
        return Math.floor(Math.random() * max);
    }
    const friendMesg = Array(getRandomInt(15)).fill(0)
    return <>
        <section
            className="hidden sm:block flex flex-col overflow-auto w-24 group lg:max-w-sm md:w-2/6 transition-all duration-300 ease-in-out">
            <div className="header p-4 flex flex-row justify-between items-center flex-none">
                <FaDragon className='h-6 w-6'/>
                <p className="flex text-md font-bold hidden md:block group-hover:block">
                    Wyvern
                </p>
                <a href="@/components/sidebar/Sidebar#"
                   className="block rounded-full hover:bg-gray-700 bg-gray-800 w-10 h-10 p-2 hidden md:block group-hover:block">
                    <AiFillEdit className='w-full h-full fill-current'/>
                </a>
            </div>
            <div className="search-box p-4 flex-none">
                <form>
                    <div className="relative">
                        <label>
                            <input
                                className="rounded-full py-2 pr-6 pl-10 w-full border border-gray-800 focus:border-gray-700 bg-gray-800 focus:bg-gray-900 focus:outline-none text-gray-200 focus:shadow-md transition duration-300 ease-in"
                                type="text" value="" placeholder="Search Messenger"/>
                            <span className="absolute top-0 left-0 mt-2 ml-3 inline-block">
                                <AiOutlineSearch className='w-6 h-6'/>
                                </span>
                        </label>
                    </div>
                </form>
            </div>
            <div className="contacts p-2 flex-1 overflow-y-scroll">
                {friendMesg.map((value, index) => (<SidebarProfile key={index}/>))}
            </div>
        </section>
    </>
}

export default Sidebar

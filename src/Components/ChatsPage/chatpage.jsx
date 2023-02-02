import React, { useState } from 'react'
import { BsArrowRightCircle } from 'react-icons/bs';
import FixedBottomNavigation from '../BottomBar/bottomBar'

const Chatpage = () => {

    const [chats, setChats] = useState(JSON.parse(localStorage.getItem('allChats')));

    const handleClick = (index) => {
        console.log(index) ;
        localStorage.setItem('response', JSON.stringify(chats[index])) ;
    }

    const showChats = (obj , index) => {
        console.log('entered');
        return (
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900 truncate">
                            {obj.question}
                        </p>
                        <p className="text-sm text-gray-500 truncate -mt-2">
                            {obj.answer}
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 p-2 hover:text-blue-500" onClick={handleClick(index)}>
                        <BsArrowRightCircle size='20px'/>
                    </div>
                </div>
            </li>
        );
    }

    return (
        <>
            <div className="w-11/12 max-w-lg py-4 px-2 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mt-24 mx-auto h-[400px] overflow-y-auto">
                <div className="flex items-center justify-center mb-4">
                    <h5 className="text-xl font-bold leading-none text-gray-900">{chats ? 'Latest Chats' : 'No chats'}</h5>
                </div>
                <div className="flow-root overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
                    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                        {
                            chats &&
                            chats.map((response , index) => {
                                const res = response.at(0);
                                console.log(response , index);
                                return (
                                    showChats(res , index)
                                );
                            })
                        }
                    </ul>
                </div>
            </div>
            <FixedBottomNavigation />
        </>
    )
}

export default Chatpage

import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AddIcon from '@material-ui/icons/Add';
const Header = () => {
    return (
        <div className='header_container  bg-gray-900 text-white flex pt-4 pl-8 pr-8 pb-4 justify-between'>
            <div className="header_left flex items-center">
            <div className="header_logo_container w-9 h-9">
            <GitHubIcon className='w-8 h-8 hover:opacity-80 cursor-pointer' />
          
            </div>
            <div className="input_container ml-2  relative ">
                <input type="text" placeholder='Search or jump to ...' className='border-2 border-gray-700 bg-transparent rounded-lg outline-none  placeholder-gray-300 w-64 bg-black p-2 h-8
               
                ' />
                
                <span className='absolute top-1 right-3 border border-gray-700 p-2 rounded-sm w-1 h-6  flex items-center justify-center  '>/</span>
            </div>
            <div className="header_links flex ml-3">
                <div className="header_link ml-3 cursor-pointer font-semibold hover:opacity-80 transition duration-100 ease-in-out">
                    Pull requests
                </div>
                <div className="header_link ml-3 cursor-pointer font-semibold hover:opacity-80 transition duration-100 ease-in-out">
                    Issues
                </div>
                <div className="header_link ml-3 cursor-pointer font-semibold hover:opacity-80 transition duration-100 ease-in-out">
                    MarketPlace
                </div>
                <div className="header_link ml-3 cursor-pointer font-semibold hover:opacity-80 transition duration-100 ease-in-out">
                    Explore
                </div>
            </div>
            </div>
            <div className="header_right flex items-center">
            <div className="header_icon ml-2 hover:opacity-80 transition duration-100 ease-in-out cursor-pointer">
           <NotificationsNoneIcon />
            </div>
            <div className="header_icon ml-2 hover:opacity-80 transition duration-100 ease-in-out cursor-pointer">
         <AddIcon />
            </div>
            <div className="header_icon ml-2  cursor-pointer">
                <img src='https://avatars.githubusercontent.com/u/69002670?v=4' className='w-7 h-7' />
            </div>
            </div>
        </div>
    )
}

export default Header

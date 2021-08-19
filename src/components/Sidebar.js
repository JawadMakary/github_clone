import React from 'react'
import SidebarRepos from './SidebarRepos'
import BookIcon from '@material-ui/icons/Book';
import LockIcon from '@material-ui/icons/Lock';
const Sidebar = () => {
    return (
        <div  style= {{backgroundColor:'var(--color-secondary)', width:'330px'}} className='sidebar flex flex-col  h-screen  '>
         <div className="h-8"></div>
         <div className="sidebar_header items-center   flex justify-between">
               
                <h1 className='text-gray-200  mt-4 ml-2 font-semibold'>Repositories</h1>
                <a style={{backgroundColor:'#2EA043',padding: '3px 12px',fontSize:'12px'}} className='text-white cursor-pointer flex items-center font-semibold justify-center  mr-4  w-11 h-7 rounded-lg '><BookIcon />New</a>
           </div>
           <div className="sidebar_search">
               <input type="text" className='border-2 border-gray-700 bg-transparent rounded-lg outline-none mt-2 ml-2 mr-2 mb-2  placeholder-gray-600  w-64 bg-black p-2 h-8 text-white'  placeholder='Find a repository...'/>
           </div>
           <div className="sidebar_repos">
               <div className="sidebar_repo cursor-pointer mb-2 mt-2 ">
               <SidebarRepos name='theProgressClick/zoom_clone' Icon={<LockIcon className='text-yellow-500'  />} />
               </div>
               <div className="sidebar_repo cursor-pointer mb-2 mt-2">
               <SidebarRepos  name='theProgressClick/twitterClone' Icon={<BookIcon className='text-gray-200' />} />
               </div>
               <div className="sidebar_repo cursor-pointer mb-2 mt-2">
               <SidebarRepos name='theProgressClick/TheTherapistCenter' Icon={<LockIcon className='text-yellow-500' />} />
               </div>
              
              

           </div>
           <div className="h-6  "></div>
          
           <hr style={{height: '1px',borderTop:'1px solid grey', marginRight:'60px',marginLeft:'10px' }} />
           <div className="sidebar_footer flex  flex-col">
               <h1 className='text-white font-semibold  mb-2 mt-4'>Recent Activity</h1>
               <h6 style={{fontSize:'12px'}} className=' text-gray-400 text-xs mb-4 mt-2'>When you take actions across GitHub, we’ll provide links to that activity here.</h6>
           </div>
        </div>
    )
}

export default Sidebar

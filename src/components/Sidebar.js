import React from 'react'
import SidebarRepos from './SidebarRepos'
import BookIcon from '@material-ui/icons/Book';
import LockIcon from '@material-ui/icons/Lock';
const Sidebar = () => {
    return (
        <div>
           <div className="sidebar_header">
                <h1>repositories</h1>
                <button>New</button>
           </div>
           <div className="sidebar_search">
               <input type="text"/>
           </div>
           <div className="sidebar_repos">
               <div className="sidebar_repo">
               <SidebarRepos name='theProgressClick/zoom_clone' Icon={<LockIcon />} />
               </div>
               <div className="sidebar_repo">
               <SidebarRepos name='theProgressClick/twitterClone' Icon={<BookIcon />} />
               </div>
               <div className="sidebar_repo">
               <SidebarRepos name='theProgressClick/TheTherapistCenter' Icon={<LockIcon />} />
               </div>
             

           </div>
           <div className="sidebar_showMore">
               <h6>Show more</h6>
           </div>
           <hr />
           <div className="sidebar_footer">
               <h1>Recent Activity</h1>
               <h6>When you take actions across GitHub, we’ll provide links to that activity here.</h6>
           </div>
        </div>
    )
}

export default Sidebar

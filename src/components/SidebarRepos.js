import React from 'react'

const SidebarRepos = ({name,Icon}) => {
    return (
        <div>
              <h3 className='text-blue-400 font-semibold hover:underline'> {Icon} {name}</h3>
              
        </div>
    )
}

export default SidebarRepos

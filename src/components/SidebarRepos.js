import React from 'react'

const SidebarRepos = ({name,Icon}) => {
    return (
        <div>
              <h3>{name}</h3>
              {Icon}
        </div>
    )
}

export default SidebarRepos

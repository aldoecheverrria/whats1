import React from 'react'
import './Sidebar.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import { Avatar } from '@material-ui/core'

import  ChatIcon  from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert'
import  {IconButton}  from '@material-ui/core';
import { SearchOutlined} from '@material-ui/icons'
import SidebarChat from './SidebarChat';



function Sidebar() {
    return (
        <div className="chat">
            <div className="sidebar__header">
                <div className="sidebar__headerRight">
                <Avatar/>
                    <IconButton/>
                        <DonutLargeIcon/>
                    <IconButton/>
                    <IconButton/>
                        <ChatIcon/>
                    <IconButton/>
                    <IconButton/>
                        <MoreVertIcon/>
                    <IconButton/>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined/>
                    <input placeholder="Buscar o iniciar..." type="text"/>
                </div>
            </div>
            <div className="sidebar__chat">
                <SidebarChat/>
            </div>
        </div>
    )
}

export default Sidebar

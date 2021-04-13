import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarChat.css'

function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar/>
            <div className="sidebarChat__info">
                <h2>Nombre del grupo</h2>
                <p>Este es el último mensaje</p>
            </div>
        </div>
    )
}

export default SidebarChat

import React from 'react';
import './ChatHeader.css';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { EditLocationRounded, HelpRounded, PeopleAltRounded, SearchRounded, SendRounded } from '@mui/icons-material';

function ChatHeader({channelName}) {
  return (
    <div className="chatHeader">
        <div className="chatHeader__left">
            <h3>
                <span className="chatHeader__hash">
                    #
                </span>
                {channelName}
            </h3>
        </div>

        <div className="chatHeader__right">
            <NotificationsIcon />
            <EditLocationRounded />
            <PeopleAltRounded />

            <div className="chatHeader__search">
                <input type="text" placeholder="Search"></input>
                <SearchRounded />
            </div>
            <SendRounded />
            <HelpRounded />
        </div>
    </div>
  )
}

export default ChatHeader
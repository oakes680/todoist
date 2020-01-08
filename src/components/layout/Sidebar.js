import React from 'react';
import {FaChevron, FaInbox, FaRegCalendarAlt, FaRegCalendar} from 'react-icons/fa'

export const Sidebar = () => {
    return (
        <div className="sidebar" data-testid='sidebar'>
            <ul className="sidebar__generic">
                <li>Inbox</li>
                <li>Today</li>
                <li>Next 7 Days</li>
            </ul>
        </div>
    )
}
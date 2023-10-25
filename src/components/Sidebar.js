import React from 'react'
import { useGlobal } from '../context/context'
import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { TfiLayoutGrid2 } from 'react-icons/tfi'
import { MdOutlineCopyAll, MdNotificationsNone } from 'react-icons/md'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { AiOutlineSetting } from 'react-icons/ai'

const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useGlobal()
    return (
        <SidebarContainer>
            <aside className={`sidebar ${isSidebarOpen && 'show-sidebar'}`}>
                <button type="button" className="close-btn" onClick={closeSidebar}>
                    <FaTimes />
                </button>
                <ul className="side-options">
                    <li>
                        <div className="options flag">flag</div>
                    </li>
                    <li>
                        <button className="options layout-btn">
                            <TfiLayoutGrid2 />
                        </button>
                    </li>
                    <li>
                        <button className="options minimize-btn">
                            <MdOutlineCopyAll />
                        </button>
                    </li>
                    <li>
                        <div className="notifications-container">
                            <button className="options notifications-btn">
                                <MdNotificationsNone />
                            </button>
                            <span className="notification-count">3</span>
                        </div>
                    </li>
                    <li>
                        username
                        <RiArrowDropDownLine className='options' />
                    </li>
                    <li>
                        <button className="options settings">
                            <AiOutlineSetting />
                        </button>
                    </li>
                </ul>
            </aside>
        </SidebarContainer>
    )
}

const SidebarContainer = styled.div`
text-align: right;
.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    transition: var(--transition);
    transform: translate(100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    transition: var(--transition);
    cursor: pointer;
    color: var(--clr-red-dark);
    margin: 1rem;
    margin-bottom: 0;
  }
  .close-btn:hover {
    color: var(--clr-red-light);
  }

  .options {
    background: transparent;
    border: none;
    font-size: 1.5rem;
  }

  li {
    font-size: 1rem;
    padding: 1rem 1.5rem;
    cursor: pointer;
    transition: var(--transition);
}

li:hover {
    padding-right: 2rem;
    background: var(--clr-grey-10);
    color: var(--clr-grey-2);
  }

  .notifications-container {
    position: relative;
}

.notification-count {
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    background: var(--clr-red-dark);
    width: 1.25rem;
    height: 1rem;
    display: grid;
    place-items: center;
    border-radius: 50%;
    color: #fff;
    font-size: 0.75rem;
}
`

export default Sidebar
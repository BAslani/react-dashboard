import React from 'react'
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
import { CiSearch } from 'react-icons/ci'
import { useGlobal } from '../context/context'
import { TfiLayoutGrid2 } from 'react-icons/tfi'
import { MdOutlineCopyAll, MdNotificationsNone } from 'react-icons/md'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { AiOutlineSetting } from 'react-icons/ai'

const Nav = () => {
  const { openSidebar } = useGlobal()
  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <section className="search">
            <CiSearch />
            <input type="search" placeholder="Search" className="search-box" name="search" />
          </section>
          <button type="button" className='nav-toggle' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-options">
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
      </div>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
height: 5rem;
display: flex;
align-items: center;
justify-content: center;
background: #fff;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);

.nav-options {
  display: none;
}
.nav-center {
  width: 90vw;
  margin: 0 auto;
}
.nav-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.search {
  display: flex;
  align-items: center;
  font-size: 1.5rem;
}

.search-box {
  background: transparent;
  border: none;
  padding: 0.25rem;
  font-size: 1rem;
}

.nav-toggle {
  background: transparent;
  border: transparent;
  color: var(--clr-primary-5);
  cursor: pointer;
  svg {
    font-size: 2rem;
  }
}

  button {
    font-size: 1.25rem;
    background: transparent;
    border: none;
    cursor: pointer;
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

@media (min-width: 992px) {
  .nav-toggle {
    display: none;
  }
  .nav-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav-options {
    display: flex;
    justify-content: center;
    li {
      margin: 0 0.5rem;
    }
  }
}
`

export default Nav

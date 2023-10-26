import React from 'react'
import { BiCircle } from 'react-icons/bi'
import styled from 'styled-components'

const RecentActivity = () => {
    return (
        <Wrapper>
            <header>
                <h5>recent activity</h5>
                <select name="sort" id="sort-activity">
                    <option value="Yearly">All Members</option>
                </select>
            </header>
            <article className="activity-info">
                <BiCircle />
                <div className="text">
                    <p>Today 12:20 pm</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ex.</p>
                </div>
            </article>
            <article className="activity-info">
                <BiCircle />
                <div className="text">
                    <p>Today 12:20 pm</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ex.</p>
                </div>
            </article>
        </Wrapper>
    )
}

const Wrapper = styled.article`
border-radius: var(--radius);
padding: 1rem 2rem;
background: var(--clr-white);
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
margin-bottom: 1rem;
height: 100%;

header {
    h5 {
      margin: 0;
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75rem;
  }
  #sort-activity {
    background: transparent;
    border: none;
  }

  .activity-info {
    p {
        margin: 0;
    }

    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 1rem;
    margin-bottom: 1rem;
  }
`

export default RecentActivity
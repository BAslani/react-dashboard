import React from 'react'
import styled from 'styled-components'
import { FaFacebook } from 'react-icons/fa'

const RecentActivity = () => {
    return (
        <Wrapper>
            <header>
                <h5>Social Sources</h5>
                <select name="sort" id="sort-social">
                    <option value="Yearly">All Members</option>
                </select>
            </header>
            <article className="social-info">
                <span className="header">
                    <FaFacebook />
                </span>
                <h5>Facebook - 125 sales</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, reprehenderit qui culpa error consequatur magnam labore provident dolores optio tempore modi sequi odit distinctio minus?</p>
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
  #sort-social {
    background: transparent;
    border: none;
  }

  .social-info {
    text-align: center;
  }

  .header {
    font-size: 1.5rem;
    color: #4099ff;
    background: #b2d9e5;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom: 1rem;
    display: grid;
    place-items: center;
  }
`

export default RecentActivity
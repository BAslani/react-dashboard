import React from 'react'
import styled from 'styled-components'

const TopSelling = () => {
    return (
        <Wrapper>
            <div className="top-sale-text">
                <h5>Top Selling Products</h5>
                <div>
                    <b>Sort By :</b>
                    <select name="sort" id="sort">
                        <option value="Yearly">Yearly</option>
                    </select>
                </div>
            </div>
            <ul className="stats">
                <li>
                    <span className="dot bar-dark-blue"></span>
                    <p>Desk...</p>
                    <div className="empty-bar">
                    <div className="filled bar-dark-blue"></div>
                    </div>
                </li>
                <li>
                    <span className="dot bar-blue"></span>
                    <p>iPho...</p>
                    <div className="empty-bar">
                    <div className="filled bar-blue"></div>
                    </div>
                </li>
                <li>
                    <span className="dot bar-green"></span>
                    <p>Andr...</p>
                    <div className="empty-bar">
                    <div className="filled bar-green"></div>
                    </div>
                </li>
                <li>
                    <span className="dot bar-orange"></span>
                    <p>Tablets</p>
                    <div className="empty-bar">
                    <div className="filled bar-orange"></div>
                    </div>
                </li>
                <li>
                    <span className="dot bar-purple"></span>
                    <p>Cables</p>
                    <div className="empty-bar">
                        <div className="filled bar-purple"></div>
                    </div>
                </li>
            </ul>
        </Wrapper>
    )
}

const Wrapper = styled.article`
background: #fff;
padding: 2rem;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
margin-top: 1rem;
margin-bottom: 1rem;

.top-sale-text {
    display: grid;
    grid-template-columns: 1fr auto;
}

#sort {
    backround: transparent;
    border: none;
}

.dot {
    height: 0.4rem;
    width: 0.4rem;
    border-radius: 50%;
    display: inline-block;
    margin-right: 0.75rem
}
.stats li {
    display: flex;
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
}

li > p {
    margin-bottom: 0;
}
}

.bar-dark-blue {
    background: #255f71;
}
.bar-blue {
    background: #4099ff;
}
.bar-green {
    background: green;
}
.bar-orange {
    background: #f0b429;
}
.bar-purple {
    background: #800080;
}

.empty-bar {
    height: 0.4rem;
    width: 100%;
    background: #dae2ec;
    border-radius: var(--radius);
    margin-left: 1rem;
    position: relative;
}
.filled {
    height: 0.4rem;
    max-width: 50%;
    border-radius: var(--radius);
    position: absolute;
}
`

export default TopSelling
import React from 'react'
import styled from 'styled-components'
import { GiArmorUpgrade } from 'react-icons/gi'

const Promotion = () => {
    return (
        <Wrapper>
            <div className="promoInfo">
                <p>Enhance your <b>Campaign</b> for better outreach</p>
                <button className="btn">Upgrade Account</button>
            </div>
            <GiArmorUpgrade className='upgrade-icon'/>
        </Wrapper>
    )
}

const Wrapper = styled.article`
background: #4099ff;
width: 100%;
height: 100%;
padding: 2rem;
display: grid;
grid-template-columns: 1fr auto;
margin-top: 1rem;
margin-bottom: 1rem;
border-radius: var(--radius);
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);

p {
    color: #fff;
}
.upgrade-icon {
    font-size: 5rem;
    color: #fff
}

@media screen and (min-width: 768px) {
    margin-top: 0;
}
`

export default Promotion
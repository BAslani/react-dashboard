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
padding: 2rem;
display: grid;
grid-template-columns: 1fr auto;
margin-bottom: 1rem;
border-radius: var(--radius);

p {
    color: #fff;
}
.upgrade-icon {
    font-size: 5rem;
    color: #fff
}
`

export default Promotion
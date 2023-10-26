import React from 'react'
import AnalysisChart from "../components/AnalysisChart"
import styled from 'styled-components'
import Promotion from './Promotion'
import TopSelling from './TopSelling'
import TopUsers from './TopUsers'

const Data = () => {
    return <section>
        <Wrapper className='section-center'>
            <AnalysisChart />
            <aside className='aside'>
                <Promotion />
                <TopSelling />
            </aside>
            <aside>
                <TopUsers />
            </aside>
        </Wrapper>
    </section>
}

const Wrapper = styled.div`
margin-top: 1rem;

justify-items: center;
gap: 1rem;
@media (min-width: 648px) {
    display: grid;
    grid-template-columns: 3fr 2fr;
}

div {
    width: 100% !important;
}
.fusioncharts-container {
    width: 100% !important;
}

.aside {
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr;
}
`

export default Data
import React from 'react'
import AnalysisChart from "../components/AnalysisChart"
import styled from 'styled-components'
import Promotion from './Promotion'
import TopSelling from './TopSelling'
import TopUsers from './TopUsers'
import RecentActivity from './RecentActivity'
import SocialSources from './SocialSources'

const Data = () => {
    return <section>
        <Wrapper className='section-center'>
            <AnalysisChart />
            <aside className='aside1'>
                <Promotion />
                <TopSelling />
            </aside>
            <aside className='aside2'>
                <TopUsers />
                <RecentActivity />
            </aside>
            <SocialSources />
        </Wrapper>
    </section>
}

const Wrapper = styled.div`
margin-top: 1rem;

justify-items: center;
gap: 1rem;
@media (min-width: 648px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
}

div {
    width: 100% !important;
}
.fusioncharts-container {
    width: 100% !important;
}

.aside1 {
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr;
}
.aside2 {
    height: 100%;
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 1rem;
}
`

export default Data
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
            <article className="analysis">
                <AnalysisChart />
            </article>
            <article className="promotion">
                <Promotion />
            </article>
            <article className="topSelling">
                <TopSelling />
            </article>
            <article className="topUsers">
                <TopUsers />
            </article>
            <article className="recentActivity">
                <RecentActivity />
            </article>
            <article className="socialSources">
                <SocialSources />
            </article>
        </Wrapper>
    </section>
}

const Wrapper = styled.div`
margin-top: 1rem;

// justify-items: center;
gap: 1rem;
@media (min-width: 742px) {
    display: grid;
    grid-template-areas:
    "a a b"
    "a a c"
    "d e f"
}

.analysis {
    grid-area: a;
}
.promotion {
    grid-area: b;
}

.topSelling {
    grid-area: c;
}
.topUsers {
    grid-area: d;
    margin-bottom: 1rem;
}
.recentActivity {
    grid-area: e;
    margin-bottom: 1rem;
}
.socialSources {
    grid-area: f;
    margin-bottom: 1rem;
}

div {
    width: 100% !important;
}
.fusioncharts-container {
    width: 100% !important;
}

// .aside1 {
//     height: 100%;
//     display: grid;
//     grid-template-rows: auto 1fr;
// }
// .aside2 {
//     height: 100%;
//     display: grid;
//     grid-template-columns: auto 1fr;
//     column-gap: 1rem;
// }
`

export default Data
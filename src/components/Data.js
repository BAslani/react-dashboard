import React from 'react'
import AnalysisChart from "../components/AnalysisChart"
import styled from 'styled-components'
import Promotion from './Promotion'

const Data = () => {
    return <section>
        <Wrapper className='section-center'>
            <AnalysisChart />
            <div>
                <Promotion />
            </div>
        </Wrapper>
    </section>
}

const Wrapper = styled.div`
margin-top: 2rem;
display: grid;
justify-items: center;
gap: 2rem;
@media (min-width: 800px) {
    grid-template-columns: 3fr 2fr;
}


div {
    width: 100% !important;
}
.fusioncharts-container {
    width: 100% !important;
}
svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
}
`

export default Data
import Data from "../components/Data"
import Stats from "../components/Stats"
import styled from "styled-components"

const Home = () => {

  return (
    <Wrapper>
      <Stats />
      <Data />
    </Wrapper>
  )
}

const Wrapper = styled.main`
height: 100%
display: grid;
`

export default Home
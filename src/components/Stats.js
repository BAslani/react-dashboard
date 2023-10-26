import React from 'react';
import styled from 'styled-components';
import { useGlobal } from '../context/context';

const Stats = () => {
    const {items} = useGlobal()
    return <section>
        <Wrapper className='section-center'>
            {items.map((item) => {
                return <Item key={item.id} {...item} />
            })}
        </Wrapper>
    </section>;
};

// iterating through mockData and displaying the stats
const Item = ({ icon, label, value, color, stat }) => {
    return (
        <article className="item">
            <div>
                <div>
                    <h4>{value}</h4>
                    <p>{label}</p>
                </div>
                <span className={`${color} icon`}>
                    {icon}
                </span>
            </div>
            <p><span className={`percent ${stat > 0 ? 'green': 'red'}`}>{stat}</span> since last week</p>
        </article>
    )
}

const Wrapper = styled.section`
margin-top: 1rem;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
gap: 1rem 2rem;
@media (min-width: 992px) {
grid-template-columns: repeat(4, 1fr);


}
.item {
    border-radius: var(--radius);
    padding: 1rem 2rem;
    background: var(--clr-white);
    display: grid;
    grid-template-rows: auto 1fr;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
}

.item > div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
}

.icon {
    width: 3rem;
    height: 3rem;
    display: grid;
    place-items: center;
    font-size: 1.5rem;
}
h3 {
    margin-bottom: 0;
    letter-spacing: 0;
}
p {
    margin-bottom: 0;
    text-transform: capitalize;
}
.percent {
    font-weight: 500;
}
.blue {
    color: #3e9fbd;
}
.green {
    color: green;
}
.orange {
    color: #f0b429;
}
.red {
    color: #bb2525;
}
`;

export default Stats;

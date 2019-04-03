import styled from 'styled-components';

export const DashboardNavContainer = styled.div`
    width: 10vw;
    height: 100vh;
    background: ${props => props.theme.primaryBlack};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`
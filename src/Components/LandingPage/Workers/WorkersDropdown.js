import React from 'react';
import styled from 'styled-components';

const WorkersDropdownContainer = styled.select`
    font-size: 2rem;
    padding: 1rem;
    border-radius: 5px;
    background: #252525;
    font-family: 'Ubuntu', sans-serif;
    color: #f3e367;

    &:focus {
        outline: none;
    }
`;

const WorkersDropdownLabel = styled.div`
    font-size: 1.8rem;
    margin-right: 1rem;
    font-family: 'Ubuntu', sans-serif;
    color: #252525;
    text-transform: uppercase;
    font-style: italic;
`;

const WorkersDropdownOption = styled.option`

`;


const WorkersDropdown = props => {

    const style = {
        display: 'flex',
        marginLeft: 'auto',
        justifyContent: 'flex-end',
        alignItems: 'center',
        background: '#e9e9e9',
        margin: '2rem auto',
    }
    return (
        <div style={style}>
        <WorkersDropdownLabel>Sort by :</WorkersDropdownLabel>
        <WorkersDropdownContainer>
            <WorkersDropdownOption value="all">All</WorkersDropdownOption>
            <WorkersDropdownOption value="bartenders">Bartenders</WorkersDropdownOption>
            <WorkersDropdownOption value="servers">Servers</WorkersDropdownOption>
            <WorkersDropdownOption value="waiters">Waiters</WorkersDropdownOption>
            <WorkersDropdownOption value="valet">Valet</WorkersDropdownOption>
            <WorkersDropdownOption value="bellhops">Bellhops</WorkersDropdownOption>
        </WorkersDropdownContainer>
        </div>
    )
}

export default WorkersDropdown;
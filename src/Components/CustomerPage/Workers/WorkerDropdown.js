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
        justifyContent: 'flex-end',
        alignItems: 'center',
        background: '#e9e9e9',
        marginBottom: '2rem',
        padding: '1rem 0',
        paddingRight: '1rem',
        borderRadius: '10px',
        boxShadow: 'inset 0px 0px 10px 5px rgba(0,0,0,0.75)',
    }
    const handleChange = e =>{
        props.setFilter(e.target.value);
    }

    return (
        <div style={style}>
        <WorkersDropdownLabel>Sort by :</WorkersDropdownLabel>
        <WorkersDropdownContainer onChange={handleChange}>
            <WorkersDropdownOption value="all">All</WorkersDropdownOption>
            <WorkersDropdownOption value="Bartender">Bartenders</WorkersDropdownOption>
            <WorkersDropdownOption value="Server">Servers</WorkersDropdownOption>
            <WorkersDropdownOption value="Waiter">Waiters</WorkersDropdownOption>
            <WorkersDropdownOption value="Valet">Valet</WorkersDropdownOption>
            <WorkersDropdownOption value="Bellhop">Bellhops</WorkersDropdownOption>
        </WorkersDropdownContainer>
        </div>
    )
}

export default WorkersDropdown;
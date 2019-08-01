import React from 'react'
import styled from 'styled-components'
import CreateWorkerButton from '../CreateWorker/CreateWorkerButton';
import WorkersDropdown from './WorkersDropdown';

const WorkerButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
`;


export default function WorkerBTN() {
    return (
        <WorkerButtonsContainer>
        
            <CreateWorkerButton/>
            <WorkersDropdown/>
        </WorkerButtonsContainer>
    )
}

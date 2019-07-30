import React from 'react';
import styled from 'styled-components';
import WorkersDropdown from './WorkersDropdown'
import CreateWorkerButton from '../CreateWorker/CreateWorkerButton';

const WorkerButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
`;


const WorkerButtons = props => {
    return(
        <WorkerButtonsContainer>
            <CreateWorkerButton></CreateWorkerButton>
            <WorkersDropdown />
        </WorkerButtonsContainer>
    );
}

export default WorkerButtons
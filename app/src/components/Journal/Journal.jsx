import React, { Component } from 'react';
import Navigation from './Navigation';
import { Button } from 'semantic-ui-react'
import styled from 'styled-components';

const Journal = (props) => {
	return (
        <>
            <Navigation />
            <JournalStyling>  
                <ActivityLogStyling>
                    <Button fluid color='purple'>Activity Log</Button>
                </ActivityLogStyling>
                <ReflectionLogStyling>
                    <Button fluid color='green'>Reflection Log</Button>
                </ReflectionLogStyling>
            </JournalStyling>
        </>
	);
};

export default Journal;

const JournalStyling = styled.div`
    display: flex;
    margin: 0 auto;
    height: 100vh;
    justify-content: center;
    align-items: center;
`

const ActivityLogStyling = styled.div`
    width: 40%;
    margin: 0 30px;
`
const ReflectionLogStyling = styled.div`
    width: 40%;
`
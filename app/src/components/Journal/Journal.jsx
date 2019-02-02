import React, { Component } from 'react';
import {Link} from 'react-router-dom';

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
                   <Link to='/journal/new'><Button fluid color='purple'>New</Button></Link> 
                </ActivityLogStyling>
                <ReflectionLogStyling>
                    <Button fluid color='green'>Reflection Log</Button>
                    <Button fluid color='green'>New</Button>
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
    .ui.purple.button{
        margin: 10px 0;
    }
    .ui.green.button{
        margin: 10px 0;
    }

`
const ActivityLogStyling = styled.div`
    width: 40%;
    margin: 0 30px;
`
const ReflectionLogStyling = styled.div`
    width: 40%;
`
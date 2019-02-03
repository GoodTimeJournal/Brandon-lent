import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Navigation from './Navigation';
import { Button } from 'semantic-ui-react'
import styled from 'styled-components';


const Journal = (props) => {
	return (
        <>
            <Navigation />
            <BackgroundStyle alt=""/>
            <HeaderText>Welcome to your dashboard. name!</HeaderText>
            <JournalStyling>
                <ActivityLogStyling>
                    <h2>Activity Log</h2>
                    <Link to ='/journal'><Button fluid color='purple'>Activity Log</Button></Link>
                   <Link to='/journal/new'><Button fluid color='purple'>New</Button></Link> 
                </ActivityLogStyling>
                <ReflectionLogStyling>
                    <h2>Reflection Log</h2>
                    <Link to='/reflection'><Button fluid color='green'>Reflection Log</Button></Link>
                    <Link to='/reflection/new'><Button fluid color='green'>New</Button></Link>
                </ReflectionLogStyling>
            </JournalStyling>
        </>
	);
};

export default Journal;

const BackgroundStyle = styled.div`
    background-image: linear-gradient(to bottom, #d183e8, #bf8dee, #ae95f1, #9f9cf1, #92a2ee, #83acf4, #74b6f7, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);
    height: 100vh;
    width: 100vw;
    position: absolute;
    z-index: -1;
`
const HeaderText = styled.h2`
    font-size: 28px;
    color: white;
    text-align: center;
`

const JournalStyling = styled.div`
    display: flex;
    margin: 100px auto 0;
    justify-content: center;
    align-items: center;
    .ui.purple.button{
        margin: 10px 0;
    }
    .ui.green.button{
        margin: 10px 0;
    }
    text-align: center;
    @media only screen and (max-width: 600px) {
        flex-direction: column;
        width: 100%;
        margin 0;
      }
`
const ActivityLogStyling = styled.div`
    width: 45%;
    border: 1px solid #E6E6E6;
    margin-right: 30px;
    background-color: white;
    padding: 90px 10px;
    max-width: 400px;
    border-radius: 5px;
    @media only screen and (max-width: 600px) {
        margin: 5px 0;
        width: 95%;
        padding: 60px 10px
    }

`
const ReflectionLogStyling = styled.div`
    width: 45%;
    border: 1px solid #E6E6E6;
    border-radius: 5px;
    background-color: white
    padding: 90px 10px;
    max-width: 400px;
    @media only screen and (max-width: 600px) {
        margin: 5px 0;
        width: 95%;
        padding: 60px 10px;
    }
`

import React from 'react';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { FaMoneyBillWave } from 'react-icons/fa';
import { icons } from 'react-icons/lib';

import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import ProjectOne from '../images/expenseTracker.jpg';
import ProjectTwo from '../images/toDoList.jpg';
import Button from './Button';


const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 10rem calc((100vw - 1300px) /2);
`;

const Container = styled.div`
    height: 100%;
    width: 100%;
    padding: 2rem 1rem;
`;

const Heading = styled.div`
    font-size: 1.5rem;
    padding: 2rem;
    margin-bottom: 40px;

    @media screen and (max-width: 768px) {
        text-align: start;
    }
`;

const InfoRow = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1rem 0rem;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

const InfoWrap = styled.div`
    padding: 0rem 1rem;
    min-height: 550px;
    height: 100%;

    h2 {
        margin-bottom: 1rem;
        font-weight: 400;
    }

    @media screen and (max-width: 768px) {
        margin-bottom: 1rem;
    }
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    max-width: 600px;
    max-height: 400px;
    object-fit: cover;
    margin-bottom: 1rem;
`;

const InfoLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none; 
    color: #000d1a;
    width: 140px;
    transition: 0.3s;

    &:hover {
        transform: translateY(-2px);
    }
`;

const SocialIcons = styled.div`
    display: flex;
    width: 50%;

    @media screen and (max-width: 768px) {
        margin-bottom: 2rem;
        width: 100%;
    }
`;

// const Icons = css`
//     font-size: clamp(1rem, 6vw, 2rem);
//     margin-right: 1.5rem;
//     color: #cd853f;
// `;

// const MoneyBillWave = styled(FaMoneyBillWave)`
//     ${icons}
// `;


const Arrow = styled(IoMdArrowRoundForward)`
    margin-left: 10px;
`;

const Projects = () => {
    return (
        <Section>
            <Container>
                <Heading>
                    <h1> View latest Projects</h1>
                </Heading>
                <InfoRow>
                    <InfoWrap>
                        <Image src={ProjectOne} alt="expense tracker" />
                        <h2>Expense Tracker App</h2>
                        <SocialIcons>
                            <a href="https://expense-tracker-dd2e5.firebaseapp.com/" rel="noopener noreferrer" target="_blank" >

                                {/* <MoneyBillWave /> */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" fill="currentColor" class="bi bi-cash-coin" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z" />
                                    <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z" />
                                    <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z" />
                                    <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z" />
                                </svg>

                            </a>
                        </SocialIcons>

                        <InfoLink to="/projects">

                        </InfoLink>
                    </InfoWrap>
                    <InfoWrap>
                        <Image
                            src={ProjectTwo}
                            alt='To Do List'
                            css={`
                        margin-top: 120px;
                        @media screen and (max-width: 768px) {
                            margin-top: 0px;
                        }
                       `}
                        />
                        <h2>To Do List</h2>
                        <SocialIcons>
                            <a href="https://todolist-8ef94.firebaseapp.com/" rel="noopener noreferrer" target="_blank" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" fill="currentColor" class="bi bi-calendar2-x-fill" viewBox="0 0 16 16">
                                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zm9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5zm-6.6 5.146a.5.5 0 1 0-.708.708L7.293 10l-1.147 1.146a.5.5 0 0 0 .708.708L8 10.707l1.146 1.147a.5.5 0 0 0 .708-.708L8.707 10l1.147-1.146a.5.5 0 0 0-.708-.708L8 9.293 6.854 8.146z" />
                                </svg>
                            </a>
                        </SocialIcons>
                        <InfoLink to="/projects">

                        </InfoLink>
                    </InfoWrap>
                </InfoRow>
            </Container>
        </Section>
    )
}

export default Projects

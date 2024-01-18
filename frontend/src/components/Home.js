import React from 'react';
import { Container, Tabs, Tab, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const Home = () => {
    return (
        <Container className="d-flex flex-column align-items-center" style={{ marginTop: '40px' }}>
            <div className="text-center mb-4">
                <h1 className="font-weight-bold" style={{ fontSize: '2.5rem', fontFamily: 'Work Sans', color: 'black' }}>
                    Login & Registration
                </h1>
            </div>

            <div className="d-flex justify-content-between bg-white p-4 rounded shadow w-75">
                <Tabs defaultActiveKey="login" id="uncontrolled-tab-example" style={{ borderBottom: '0' }}>
                    <Tab eventKey="login" title="Login">
                        <LoginForm />
                    </Tab>
                    <Tab eventKey="signup" title="Register">
                        <RegisterForm />
                    </Tab>
                </Tabs>

                <Image
                    src='https://img.freepik.com/free-vector/job-interview-conversation_74855-7566.jpg?w=1380&t=st=1705037238~exp=1705037838~hmac=42f4d55670de47d84387c5134747c55da8edc2c49ec0b2070b402b4206362bfb'
                    style={{ width: '50%', objectFit: 'cover', borderRadius: '10px' }}
                />
            </div>
        </Container>
    );
};

export default Home;

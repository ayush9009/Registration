import React, { useState } from 'react';
import { Form, Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        dob: '',
        email: '',
        password: '',
    });

    let navigate = useHistory();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/register', formData);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));

            navigate.push('/dashboard');
        } catch (error) {
            console.error('Registration failed', error);
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup controlId="name">
                <FormLabel>Name</FormLabel>
                <FormControl
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </FormGroup>

            <FormGroup controlId="dob">
                <FormLabel>Date of Birth</FormLabel>
                <FormControl
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                />
            </FormGroup>

            <FormGroup controlId="email">
                <FormLabel>Email</FormLabel>
                <FormControl
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </FormGroup>

            <FormGroup controlId="password">
                <FormLabel>Password</FormLabel>
                <FormControl
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
            </FormGroup>

            <Button type="submit" style={{ marginTop: '10px' }} >Register</Button>

        </Form>
    );
};

export default RegisterForm;

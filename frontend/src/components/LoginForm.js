// import React, { useState } from 'react';
// import { Form, Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
// import axios from 'axios';

// const LoginForm = ({ history }) => {
//     const [formData, setFormData] = useState({
//         email: '',
//         password: '',
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:5000/login', formData);
//             localStorage.setItem('token', response.data.token);
//             localStorage.setItem('user', JSON.stringify(response.data.user));
//             history.push('/dashboard');
//         } catch (error) {
//             console.error('Login failed', error);
//         }
//     };

//     return (
//         <Form onSubmit={handleSubmit}>
//             <FormGroup controlId="email">
//                 <FormLabel>Email</FormLabel>
//                 <FormControl
//                     type="email"
//                     name="email"
//                     placeholder="Enter your email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                 />
//             </FormGroup>

//             <FormGroup controlId="password">
//                 <FormLabel>Password</FormLabel>
//                 <FormControl
//                     type="password"
//                     name="password"
//                     placeholder="Enter your password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     required
//                 />
//             </FormGroup>

//             <Button type="submit">Login</Button>
//         </Form>
//     );
// };

// export default LoginForm;
import React, { useState } from 'react';
import { Form, Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const history = useHistory();
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', formData);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            console.log("dashborad se ahle ho mai");
            history.push('/dashboard');
            console.log("dashborad kai bad ho mai");
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
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

            <FormGroup controlId="password" style={{ marginBottom: '15px' }}>
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

            <Button type="submit" style={{ marginTop: '10px' }}>Login</Button>
        </Form>
    );
};

export default LoginForm;

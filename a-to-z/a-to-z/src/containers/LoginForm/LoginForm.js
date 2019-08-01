import React, {useState, useEffect} from 'react';
import {Form, Button, Message, Grid} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import axios from 'axios';

function axiosWithAuth() {
    const token = window.localStorage.getItem('token');
    return axios.create({
        headers: {
            Authorization: token
        }
    })
}

const LoginForm = (props) => {
    const {history} = props;
    const [user, setUser] = useState({username: '', password: ''});

    // to update the values for username and password
    const handleChange = event => {
        setUser({...user, [event.target.name]: event.target.value});
    }

    // to validate the login information
    const handleLogin = event => {
        event.preventDefault();
        axios.post('link', user)
        // to save token to local storage
        
        .then(res => 
            {console.log(res);
        const token = res.data.token;
        localStorage.setItem('token', token)}
        )
    };

    const [data, setData] = useState([]);
    useEffect(() => {
        // axios.get('link with users', {
        //     headers: {
        //         Authorizations: window.localStorage.getItem('token')
        //     }
        axiosWithAuth().get('link')
        // })
        .then(res => {
            setData(res.data);
        })
        .catch(
            error => {
                console.log('unable to get data', error);
            }
        )

    }, [])
    return(
        <Grid centered columns={2} verticalAlign='middle'>
            <Grid.Column>

            <Form id='login-form' onSubmit={handleLogin}>
            <Message>
            <p>Log In</p>

            <Form.Input id='form-input-user-email' fluid icon='user' iconPosition='left' placeholder='E-mail address' value={user.username} onChange={handleChange}/>

            <Form.Input id='form-input-user-password'fluid icon='lock' iconPosition='left' placeholder='Password' value={user.password} onChange={handleChange}/>
            {/* <Form.Checkbox label='Remember me' /> */}
           
            <Form.Checkbox label='Remember me' />
            <p>
            <Link to='/forgot-password'> Forgot password? </Link>
            </p>
           
            <Button type='submit'>Submit</Button>

            <p> Don't have an account? <Link to='/signup'> Sign up </Link> </p>
            </Message>
            </Form>

            </Grid.Column>
        </Grid>

    )

};

export default LoginForm;
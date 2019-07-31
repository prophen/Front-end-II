import React, {useState, useEffect} from 'react';
import { Form, Button, Message} from 'semantic-ui-react';
import axios from 'axios';
import { get } from 'https';

function axiosWithAuth() {
    const token = window.localStorage.getItem('token');
    return axios.create({
        headers: {
            Authorization: token
        }
    })
}

const LoginForm = () => {
    
    const [user, setUser] = useState({username: '', password: ''});

    const handleChange = event => {
        setUser({...user, [event.target.name]: event.target.value});
    }

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
   
        <Form id='login-form' onSubmit={handleLogin}>
            <Form.Input id='form-input-user-email' fluid icon='user' iconPosition='left' placeholder='E-mail address' value={user.username} onChange={handleChange}/>

            <Form.Input id='form-input-user-password'fluid icon='lock' iconPosition='left' placeholder='Password' value={user.password} onChange={handleChange}/>
            <Form.Checkbox label='Remember me' />
            <div><a href='#'>Forgot password?</a> </div>
            
            <Button type='submit'>Submit</Button>

            <Message> Don't have an account? <a href='#'>Sign Up</a> </Message>
    
 
      </Form>
    




        



    )

};

export default LoginForm;
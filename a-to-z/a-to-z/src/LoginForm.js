import React from 'react';
import { Form, Button, Message} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    
    return(
   
        <Form id='login-form'>
            <Form.Input id='form-input-user-email' fluid icon='user' iconPosition='left' placeholder='E-mail address' />

            <Form.Input id='form-input-user-password'fluid icon='lock' iconPosition='left' placeholder='Password' />
            <Form.Checkbox label='Remember me' />
            <div><a href='#'>Forgot password?</a> </div>
            
            {/* <Link to="/login/reset">Forgot password?</Link> */}

            <Button type='submit'>Submit</Button>

            <Message> Don't have an account? <a href='#'>Sign Up</a> </Message>
    
 
      </Form>
    




        



    )

};

export default LoginForm;
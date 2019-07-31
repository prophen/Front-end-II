import React from 'react';
import {Form, Message} from 'semantic-ui-react';

const SignUpForm = () => {
    return (
        <Form id='sign-up-form'>
             <Message>
                 Let's do something exciting!
             </Message>

            <Form.Input id='sign-up-form-email' placeholder='E-mail'/>

            <Form.Input id='sign-up-form-first-name' placeholder='First-name'/>

            <Form.Input id='sign-up-form-last-name' placeholder='Last-name'/>

            Please enter your date of birth. To sign up, you must 18+
            
            <Form.Input id='sign-up-form-birth-month' width={6} placeholder='month'/>
            <Form.Input id='sign-up-form-birth-day' width={2} placeholder='day'/>
            <Form.Input id='sign-up-form-birth-year' width={6} placeholder='year'/>

            <Form.Button id='sign-up-form-submit-button'> Submit </Form.Button>

            <Message>
              Already have an account? <a href='#'>Log in</a>
            </Message>


        </Form>

    );
};

export default SignUpForm;

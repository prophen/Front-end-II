import React from 'react';
import {Form, Message} from 'semantic-ui-react';

const SignUp = () => {
    return (
        <Form id='sign-up-form'>
             <Message>
                 Let's do something exciting!
             </Message>

            <Form.Input id='sign-up-form-email' placeholder='E-mail'/> 

            <Form.Input id='sign-up-form-first-name' placeholder='First-name'/>

            <Form.Input id='sign-up-form-last-name' placeholder='Last-name'/>

            <Message>
                Birthday.
                To sign up, you must 18+
            </Message>

            {/* to modify to dropdown menu */}
            {/* https://react.semantic-ui.com/modules/dropdown/#types-search-selection */}
            <Form.Input id='sign-up-form-birth-month' width={6} placeholder='s'> </Form.Input>
            <Form.Input id='sign-up-form-birth-day' width={2} placeholder=''> </Form.Input>
            <Form.Input id='sign-up-form-birth-year' width={6} placeholder=''> </Form.Input>

            <Form.Button id='sign-up-form-submit-button'> Submit </Form.Button>

            <Message>
              Already have an account? <a href='#'>Log in</a>
            </Message>


        </Form>

    );
};

export default SignUp;
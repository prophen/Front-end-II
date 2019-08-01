import React, {useState} from 'react';
import {Grid, Form, Message} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import { __values } from 'tslib';

const SignUpForm = (props) => {
    const {history} = props;

    const [person, setPerson] = useState({name: '', email: '', fistName: '', lastName: '', birthMonth:'', birthDay: '', birthYear: ''});

    // to update the values of the person
    const handleChange = event => {
      setPerson({...person, [event.target.name]: event.target.value});
    };

    // to update the person once submitted
    const handleSubmit = event => {
      event.preventDefault();
   
      setPerson({name: "", email: "", role: "", email: '', fistName: '', lastName: '', birthMonth:'', birthDay: '', birthYear: ''});

      // to return back to main
      history.push("/");

    };

    return (
        <div className='sign-up-form'> 

        <Grid centered columns={2} verticalAlign='middle' >
        <Grid.Column>
        <Form id='sign-up-form' onSubmit={handleSubmit} >
             <Message>
                 Let's do something exciting!
             </Message>

            <Form.Input id='sign-up-form-email' placeholder='E-mail' 
           name='email' onChange={handleChange}/>


            <Form.Input id='sign-up-form-first-name' placeholder='First-name' name='fistName' onChange={handleChange}/>

            <Form.Input id='sign-up-form-last-name' placeholder='Last-name' name='lastName' onChange={handleChange}/>

            Please enter your date of birth. To sign up, you must 18+
            
            <Form.Input id='sign-up-form-birth-month' width={6} placeholder='month' name='birthMonth' onChange={handleChange}/>
            <Form.Input id='sign-up-form-birth-day' width={2} placeholder='day' name='birthDay' onChange={handleChange}/>
            <Form.Input id='sign-up-form-birth-year' width={6} placeholder='year' name='birthYear' onChange={handleChange}/>

            <Form.Button id='sign-up-form-submit-button'> Submit </Form.Button>

            <Message>
              Already have an account? 
              <Link to='/login'> Log in </Link>
            </Message>


        </Form>
        </Grid.Column>
        </Grid>
   

        </div>




    );
};

export default SignUpForm;





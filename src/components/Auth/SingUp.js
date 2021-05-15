import React from 'react';
import styled from 'styled-components'

const SingUp = () => {
    return (
        <Container>
            <Form>
                <FormGroup>
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name"/>
                </FormGroup>
                <FormGroup>
                    <label>Email</label>
                    <input type="email" name="email" placeholder="email"/>
                </FormGroup>
                <FormGroup>
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Password"/>
                </FormGroup>
                <FormGroup>
                    <label>Confram Password</label>
                    <input type="password" name="conframPassword" placeholder="Confram Password"/>
                </FormGroup>
                <SubmitButton>SignUp</SubmitButton>
            </Form>

        </Container>
    );
}

export default SingUp;

const Container = styled.div`

`
const Form = styled.form`


`
const FormGroup = styled.div`

`
const SubmitButton = styled.button`

`
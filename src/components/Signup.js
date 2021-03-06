import React, {useRef, useState} from 'react'
import {Card, Form, Button, Alert } from 'react-bootstrap'
import { useHistory, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'

function Signup() {

    const emailRef = useRef();
    const passwordRef = useRef();
    const {signup }=useAuth();
    const passwordConfirmRef= useRef();
    const [error, setError] = useState('');
    const [ loading, setLoading] = useState(false)
    const history = useHistory()



    async function handleSubmit(e){
        
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match")
          }

        try{
            setError('')
            setLoading(true)
            await  signup(emailRef.current.value, passwordRef.current.value)
            history.push('/login')
        } catch{
            setError('Failed to create an account !')
        }
        setLoading(false)
       
    }

    return (
       <>
       <Card>
           <Card.Body>
               <h2 className="text-center mb-4">Sign Up</h2>
               {error && <Alert variant="danger">{error}</Alert> }
              
               <Form onSubmit= { handleSubmit }>
                   <Form.Group id="email">
                       <Form.Label>Email</Form.Label>
                       <Form.Control type="email" ref={emailRef} required />
                   </Form.Group>

                   <Form.Group id="password">
                       <Form.Label>password</Form.Label>
                       <Form.Control type="password" ref={passwordRef} required />
                   </Form.Group>

                   <Form.Group id="password-confirm">
                       <Form.Label>password Confirm</Form.Label>
                       <Form.Control type="password" ref={passwordConfirmRef} required />
                   </Form.Group>

                   <Button type="submit" className="w-100" disabled= {loading}>Sign Up</Button>
               </Form>
    
           </Card.Body>
       </Card>
       <div className="w-100 text-center mt-2">
           Already have an account? <Link to="/login">Log In</Link>
       </div>
       </>
    )
}

export default Signup

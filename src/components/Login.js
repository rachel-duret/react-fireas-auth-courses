import React, {useRef, useState} from 'react'
import {Card, Form, Button, Alert } from 'react-bootstrap'
import { useHistory, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'

function Login() {

    const emailRef = useRef();
    const passwordRef = useRef();
    const { login }=useAuth();
    const [error, setError] = useState('');
    const [ loading, setLoading] = useState(false)
    const history = useHistory()



    async function handleSubmit(e){
        console.log(e.target)
        e.preventDefault();

        try{
            setError('')
            setLoading(true)
            await  login(emailRef.current.value, passwordRef.current.value)
            history.push('/')
        } catch{
            setError('Failed to login !')
        }
        setLoading(false)
       
    }

    return (
       <>
       <Card>
           <Card.Body>
               <h2 className="text-center mb-4">Log In</h2>
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

                   <Button type="submit" className="w-100" disabled= {loading}>Log In</Button>
               </Form>
               <div className="w-100 text-center mt-2">
                   <Link to="/forgot-password">Forgot Password</Link>
               </div>
    
           </Card.Body>
       </Card>
       <div className="w-100 text-center mt-2">
           Already have an account? <Link to="/signup">Sign Up</Link>
       </div>
       </>
    )
}

export default Login

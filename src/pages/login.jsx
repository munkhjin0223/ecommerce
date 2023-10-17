import React, { useState } from 'react';
import { Card, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    console.log('email', email);
    console.log('password', password);

    fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          window.location.href = '/';
        } else {
          alert(data.message);
        }
      });
  };

  return (
    <>
      <div className='page-heading about-page-heading' id='top'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='inner-content'>
                <h2>About Our Company</h2>
                <span>Awesome, clean &amp; creative HTML5 Template</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row justify-content-center mt-5'>
          <div className='col-lg-4'>
            <Card className='shadow'>
              <Card.Title className='text-center border-bottom'>
                <h2 className='p-3'>Нэвтрэх</h2>
              </Card.Title>
              <Card.Body>
                <Form onSubmit={onSubmit}>
                  <Form.Group className='mb-4'>
                    <Form.Label>Имэйл</Form.Label>
                    <Form.Control type='email' onChange={(e) => setEmail(e.target.value)} required />
                  </Form.Group>
                  <Form.Group className='mb-4'>
                    <Form.Label>Нууц үг</Form.Label>
                    <Form.Control type='password' onChange={(e) => setPassword(e.target.value)} required />
                  </Form.Group>
                  <Form.Group className='d-grid'>
                    <Button type='submit'>Нэвтрэх</Button>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

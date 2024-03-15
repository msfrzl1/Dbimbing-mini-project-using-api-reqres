/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import Card from './Card';
import Button from '../Elements/Button';
import Label from '../Elements/Label';
import Input from '../Elements/Input';
import { useState } from 'react';

const FormLogin = () => {
   const [form, setForm] = useState({
      email: '',
      password: '',
   });

   const onChange = (e) => {
      setForm({
         ...form,
         [e.target.name]: e.target.value,
      });
   };

   return (
      <Card>
         <Card.Title>
            <div>
               <h1>Welcome back friend</h1>
               <p>
                  Don't have an account?{' '}
                  <Link
                     className='link'
                     to='/register'
                  >
                     Register
                  </Link>
               </p>
            </div>
         </Card.Title>
         <form>
            <Card.Body>
               <div className='mb-3'>
                  <Label
                     htmlFor='email'
                     value='Email'
                  />
                  <Input
                     id='email'
                     type='email'
                     name='email'
                     placeholder='example@me.com'
                     value={form.email}
                     onChange={onChange}
                     required
                  />
               </div>
               <div className='mb-3'>
                  <Label
                     htmlFor='password'
                     value='Password'
                  />
                  <Input
                     id='password'
                     type='password'
                     name='password'
                     placeholder='*******'
                     value={form.password}
                     onChange={onChange}
                     required
                  />
               </div>
               <Link>forgot password?</Link>
            </Card.Body>
         </form>
         <Card.Footer>
            <Button
               text='Login'
               className='bg-cyan-600 hover:bg-cyan-700'
            ></Button>
         </Card.Footer>
      </Card>
   );
};

export default FormLogin;

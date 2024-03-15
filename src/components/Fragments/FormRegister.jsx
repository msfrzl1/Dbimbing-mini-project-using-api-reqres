import { Link } from 'react-router-dom';
import Card from './Card';
import Button from '../Elements/Button';
import Label from '../Elements/Label';
import Input from '../Elements/Input';
import { useState } from 'react';

const FormRegister = () => {
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
               <h1>Register for new account !</h1>
               <p>
                  Alredy have an account?{' '}
                  <Link
                     className='link'
                     to='/login'
                  >
                     Login
                  </Link>
               </p>
            </div>
         </Card.Title>
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
         </Card.Body>
         <Card.Footer>
            <Button
               text='Register'
               className='bg-cyan-600 hover:bg-cyan-700'
            />
         </Card.Footer>
      </Card>
   );
};

export default FormRegister;

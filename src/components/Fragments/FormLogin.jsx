/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { login } from '../Utils/apiUtils';
import Card from './Card';
import Button from '../Elements/Button';
import Label from '../Elements/Label';
import Input from '../Elements/Input';
import { IconLogin } from '@tabler/icons-react';

const FormLogin = () => {
   const [notif, setNotif] = useState('');
   const [loading, setLoading] = useState(false);
   const [form, setForm] = useState({
      email: '',
      password: '',
   });
   const navigate = useNavigate();

   const onChange = (e) => {
      setForm({
         ...form,
         [e.target.name]: e.target.value,
      });
   };

   const handleLogin = (e) => {
      e.preventDefault();
      login(form, navigate, setLoading, (message) => {
         setNotif(message);
         setTimeout(() => {
            setNotif('');
         }, 2000);
      });
   };

   return (
      <div
         data-aos='flip-right'
         data-aos-duration='1000'
      >
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
            <form onSubmit={handleLogin}>
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
               <Card.Footer>
                  <Button className='bg-cyan-600 hover:bg-cyan-700'>
                     <IconLogin />
                     {loading ? 'Loading...' : 'Login'}
                  </Button>
                  {notif && (
                     <p
                        className={
                           notif === 'Login Success'
                              ? 'text-green-500 flex items-center justify-center'
                              : 'text-red-500 flex items-center justify-center'
                        }
                     >
                        {notif}
                     </p>
                  )}
               </Card.Footer>
            </form>
         </Card>
      </div>
   );
};

export default FormLogin;

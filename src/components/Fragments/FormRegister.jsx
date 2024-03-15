import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { register } from '../Utils/apiUtils';
import Card from './Card';
import Button from '../Elements/Button';
import Label from '../Elements/Label';
import Input from '../Elements/Input';

const FormRegister = () => {
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

   const handleRegister = (e) => {
      e.preventDefault();
      register(form, navigate, setLoading, (message) => {
         setNotif(message);
         setTimeout(() => {
            setNotif('');
         }, 2000);
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
         <form onSubmit={handleRegister}>
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
                  text={loading ? 'Loading...' : 'Register'}
                  className='bg-cyan-600 hover:bg-cyan-700'
               />
               {notif && (
                  <p
                     className={
                        notif === 'Register Success'
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
   );
};

export default FormRegister;

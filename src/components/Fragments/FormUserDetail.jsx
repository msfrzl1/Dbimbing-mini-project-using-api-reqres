/* eslint-disable react-hooks/exhaustive-deps */
import { IconEdit, IconSquareX } from '@tabler/icons-react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { userDetail } from '../Utils/apiUtils';
import Card from './Card';
import Button from '../Elements/Button';

const FormUserDetail = () => {
   const [user, setUser] = useState([]);
   const { id } = useParams();

   const getUserDetail = () => {
      userDetail(setUser, id);
   };

   useEffect(() => {
      getUserDetail();
   }, []);

   return (
      <Card>
         <Card.Title>
            <div className='image-users'>
               <img
                  src={user.avatar}
                  alt={`profile${id}`}
               />
            </div>
         </Card.Title>
         <Card.Body>
            <div className='title-name'>
               <h1>
                  {user.first_name} {user.last_name}
               </h1>
               <p>{user.email}</p>
            </div>
         </Card.Body>
         <Card.Footer>
            <Button className='bg-green-600'>
               <IconEdit />
               Edit Profile
            </Button>
            <Button className='bg-red-600'>
               <IconSquareX />
               Delete Profile
            </Button>
         </Card.Footer>
      </Card>
   );
};

export default FormUserDetail;

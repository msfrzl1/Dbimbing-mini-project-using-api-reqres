import { useEffect, useState } from 'react';
import Card from './Card';
import { getUsers } from '../Utils/apiUtils';
import Button from '../Elements/Button';
import { IconUserScan } from '@tabler/icons-react';

const FormUser = () => {
   const [users, setUsers] = useState([]);

   const getUser = () => {
      getUsers(setUsers);
   };

   useEffect(() => {
      getUser(setUsers);
   }, []);

   return (
      <div className='card-container'>
         {users.map((user, index) => (
            <div
               key={index}
               className='card'
            >
               <Card>
                  <Card.Title>
                     <div className='image-users'>
                        <img
                           src={user.avatar}
                           alt={`profile${index}`}
                        />
                     </div>
                  </Card.Title>
                  <Card.Body>
                     <div className='title-name'>
                        <h1>
                           {user.first_name} {user.last_name}
                        </h1>
                     </div>
                  </Card.Body>
                  <Card.Footer>
                     <Button className='bg-indigo-600'>
                        <IconUserScan />
                        View Profile
                     </Button>
                  </Card.Footer>
               </Card>
            </div>
         ))}
      </div>
   );
};

export default FormUser;
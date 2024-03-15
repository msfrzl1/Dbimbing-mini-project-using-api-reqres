import FormUser from '../components/Fragments/FormUsers';
import Auth from '../components/Layouts/Auth';

const UsersPage = () => {
   return (
      <Auth>
         <FormUser></FormUser>
      </Auth>
   );
};

export default UsersPage;

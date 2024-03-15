import FormLogin from '../components/Fragments/FormLogin';
import PlaceContentCenter from '../components/Fragments/PlaceContentCenter';
import Auth from '../components/Layouts/Auth';

const LoginPage = () => {
   return (
      <Auth>
         <PlaceContentCenter>
            <FormLogin />
         </PlaceContentCenter>
      </Auth>
   );
};

export default LoginPage;

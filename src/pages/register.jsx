import FormRegister from '../components/Fragments/FormRegister';
import PlaceContentCenter from '../components/Fragments/PlaceContentCenter';
import Auth from '../components/Layouts/Auth';

const RegisterPage = () => {
   return (
      <Auth>
         <PlaceContentCenter>
            <FormRegister />
         </PlaceContentCenter>
      </Auth>
   );
};

export default RegisterPage;

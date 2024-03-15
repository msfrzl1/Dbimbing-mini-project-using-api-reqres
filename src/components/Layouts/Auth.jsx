import Footer from '../Fragments/Footer';
import Navbar from '../Fragments/Navbar';

const Auth = ({ children }) => {
   return (
      <>
         <Navbar />
         {children}
         <Footer />
      </>
   );
};

export default Auth;

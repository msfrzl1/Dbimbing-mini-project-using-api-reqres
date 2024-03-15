const Card = ({ children }) => {
   return <div className='shadow rounded-lg overflow-hidden bg-white'>{children}</div>;
};

const Title = ({ children }) => {
   return (
      <div className='border-b font-semibold p-4'>
         <h1 className='text-2xl'>{children}</h1>
      </div>
   );
};

const Body = ({ children }) => {
   return <div className='leading-relaxed p-4'>{children}</div>;
};

const Footer = ({ children }) => {
   return <div className='bg-slate-50 p-4'>{children}</div>;
};

Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;

export default Card;

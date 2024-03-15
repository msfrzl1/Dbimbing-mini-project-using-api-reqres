const PlaceContentCenter = ({ children }) => {
   return (
      <div className='bg-slate-100 antialiased text-slate-800 tracking-tighter flex items-center justify-center min-h-screen'>
         <div className='max-w-md w-full'>
            <div className='place-content-center'>{children}</div>
         </div>
      </div>
   );
};

export default PlaceContentCenter;

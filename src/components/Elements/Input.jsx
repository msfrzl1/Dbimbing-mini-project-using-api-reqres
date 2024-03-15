const Input = ({ type = 'text', ...props }) => {
   return (
      <input
         {...props}
         type={type}
         className='transition duration-300 w-full focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-400 border rounded shadow-sm'
      />
   );
};

export default Input;

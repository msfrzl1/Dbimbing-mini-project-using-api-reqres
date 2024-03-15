const Button = (props) => {
   const { className = 'bg-black', children, text, type = 'submit' } = props;
   return (
      <div className='mb-2'>
         <button
            {...props}
            type={type}
            className={`[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 button w-full ${className}`}
         >
            {text || children}
         </button>
      </div>
   );
};

export default Button;

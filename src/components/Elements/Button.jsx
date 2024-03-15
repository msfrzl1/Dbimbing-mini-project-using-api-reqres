const Button = (props) => {
   const { className = 'bg-black', children, text, type = 'submit' } = props;
   return (
      <button
         {...props}
         type={type}
         className={`[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 button ${className}`}
      >
         {text || children}
      </button>
   );
};

export default Button;

const Label = ({ value, children, ...props }) => {
   return (
      <label
         className='text-slate-600 mb-1 block font-medium'
         {...props}
      >
         {value || children}
      </label>
   );
};

export default Label;

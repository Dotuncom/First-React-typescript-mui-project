
type FormInputProps = {
  type: string;
  label: string;
  value: string;
  name: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};
const FormInput = ({
  type,
  label,
  value,
  name,
  placeholder,
  required = false,
  onChange,
}: FormInputProps) => {
  return (
    <div className=" flex flex-col  ">
      <label className="text-sm font-medium text-gray-400 mb-1" htmlFor={name}>
        {label}
      </label>
      <input 
        id={name}
        value={value}
        name={name}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
         className="px-4 py-3 w-full rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-colors"

      />
    </div>
  );
};

export default FormInput;

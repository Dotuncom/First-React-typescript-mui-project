import type React from "react";

type FormSelectProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
};
const FormSelect = ({
  label,
  name,
  value,
  onChange,
  options,
}: FormSelectProps) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-sm font-medium text-gray-400 mb-1">
        {label}
      </label>

      <select
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className="px-4 py-3 w-full rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-colors text-gray-400"
      >
        {
            options.map((option,index)=>(
                <option key={index} value={option}>
                    {option}
                </option>
            ))
        }
      </select>
    </div>
  );
};

export default FormSelect;

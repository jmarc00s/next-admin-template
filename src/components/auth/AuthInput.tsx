import React, { HTMLInputTypeAttribute } from 'react';

interface AuthInputProps {
  label: string;
  value: any;
  type: HTMLInputTypeAttribute;
  required?: boolean;
  onChange: (value: any) => void;
}

const AuthInput = ({
  label,
  value,
  onChange,
  type,
  required,
}: AuthInputProps) => {
  return (
    <div className="flex flex-col mt-3">
      <label>{label}</label>
      <input
        className={`px-4 py-3 rounded-lg 
            bg-gray-200 mt-2 border 
            focus:border-blue-500 focus:outline-none focus:bg-white`}
        type={type ?? 'text'}
        value={value}
        onChange={({ target }) => onChange(target.value)}
        required={required}
      />
    </div>
  );
};

export default AuthInput;

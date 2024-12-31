import { useState } from "react";

interface FormFieldProps {
  label: string;
  type?: 'text' | 'email' | 'tel';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  name: string;
  multiline?: boolean;
  required?: boolean;
}

const FormField : React.FC<FormFieldProps>  = ({
  label,
  type = "text",
  value,
  onChange,
  name,
  multiline = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const isOccupied = value.length > 0 || isFocused;

  const commonClasses = `
     w-full px-4 py-3 rounded-lg bg-transparent 
    border border-gray-600 text-gray-300 
    focus:outline-none focus:border-[#FFB400] 
    transition-all duration-200 relative
    ${isOccupied ? "pt-6 pb-2" : "pt-3 pb-3"}
    ${
      isFocused
        ? "shadow-[0_0_15px_rgba(249,115,22,0.15)] border-orange-500"
        : ""
    }
  `;

  return (
    <div>
      <label>{label}</label>
      {multiline ? (
        <textarea
          name={name}
          rows={6}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`${commonClasses} resize-none text-white`}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`${commonClasses} text-white`}
        />
      )}

      {isFocused && (
        <div className="absolute inset-0 rounded-lg pointer-events-none bg-gradient-to-r from-orange-500/5 to-orange-600/5" />
      )}

    </div>
  );
};

export default FormField;

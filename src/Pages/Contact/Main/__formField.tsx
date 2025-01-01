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

  const commonClasses = `
     w-full px-4 py-3 rounded-lg bg-transparent 
    border-2 border-secondary 
    focus:outline-none focus:border-highlight 
    transition-all duration-300 relative
    }
    ${
      isFocused
        ? "border-highlight"
        : ""
    }
  `;

  return (
    <div className="space-y-2">
      <label>{label}</label>
      {multiline ? (
        <textarea
          name={name}
          rows={6}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`${commonClasses} resize-none`}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`${commonClasses}`}
        />
      )}

      {isFocused && (
        <div className="absolute inset-0 rounded-lg pointer-events-none" />
      )}

    </div>
  );
};

export default FormField;

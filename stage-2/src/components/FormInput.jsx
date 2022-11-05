import { useState } from "react";

const FormInput = ({ label, placeholder, type, tabIndex, id, helperText }) => {
  const [initialFocus, setInitialFocus] = useState(false);

  const tailwindStyles =
    "border placeholder-shown:border-gray-300 focus:border-primary-300 rounded-lg py-[10px] px-[14px] md:text-md text-sm text-gray-900 placeholder:text-md placeholder:text-gray-500 focus:outline-none";
  return (
    <div className="flex flex-col gap-[6px] grow">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      {type !== "textarea" ? (
        <div className="flex flex-col gap-[6px]">
          <input
            className={`${tailwindStyles} ${
              initialFocus &&
              "invalid:border-error-default invalid:focus:ring-error-focused"
            }`}
            type={type}
            placeholder={placeholder}
            tabIndex={tabIndex}
            onBlur={() => setInitialFocus(true)}
            required
            id={id}
          />
          <p className={`text-sm font-normal text-gray-600`}>{helperText}</p>
        </div>
      ) : (
        <div className="flex flex-col gap-[6px]">
          <textarea
            className={`${tailwindStyles} peer h-[130px] focus:border-primary-300 focus:ring focus:ring-primary-100 ${
              initialFocus &&
              "invalid:border-error-default invalid:focus:ring-error-focused invalid:focus:border-error-default"
            }`}
            placeholder={placeholder}
            tabIndex={tabIndex}
            onBlur={() => setInitialFocus(true)}
            required
            id={id}
          ></textarea>
          <p
            className={`invisible ${
              initialFocus && "peer-invalid:visible font-medium text-[#F83F23]"
            }`}
          >
            Please enter a message
          </p>
        </div>
      )}
    </div>
  );
};

export default FormInput;

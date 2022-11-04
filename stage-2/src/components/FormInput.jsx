const FormInput = ({ label, placeholder, type, tabIndex }) => {
  const tailwindStyles =
    "border border-gray-300 focus:border-primary-300 rounded-lg py-[10px] px-[14px] md:text-md text-sm text-gray-900 placeholder:text-md placeholder:text-gray-500 focus:outline-none";
  return (
    <div className="flex flex-col gap-[6px] grow">
      <label className="text-gray-700 text-sm font-medium">{label}</label>
      {type !== "textarea" ? (
        <input
          className={`${tailwindStyles} invalid:border-error-default invalid:focus:ring-error-focused`}
          type={type}
          placeholder={placeholder}
          tabIndex={tabIndex}
        />
      ) : (
        <textarea
          className={`${tailwindStyles} h-[130px] focus:border-primary-300 focus:ring focus:ring-primary-100 invalid:border-error-default invalid:focus:ring-error-focused `}
          placeholder={placeholder}
          tabIndex={tabIndex}
        ></textarea>
      )}
    </div>
  );
};

export default FormInput;

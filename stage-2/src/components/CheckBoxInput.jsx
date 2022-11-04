const CheckBoxInput = () => {
  return (
    <label className="relative pl-[32px]  text-md text-gray-600 ">
      You agree to providing your data to Akuya Ekorot who may contact you.
      <input type={"checkbox"} className="hidden peer"></input>
      <div
        className="mt-[2px] peer-disabled:border-gray-300 peer-disabled:bg-gray-100 focus:outline-none focus:bg-white focus:border focus:border-primary-300 focus:ring-[4px] focus:ring-primary-100 peer-checked:after:block after:hidden after:absolute after:-top-[4px] after:left-[3px] after:content-link peer-checked:bg-gray-50 peer-checked:border-primary-600 absolute top-0 left-0 h-[20px] w-[20px] bg-white border border-gray-300 rounded-md"
        tabIndex="5"
      ></div>
    </label>
  );
};

export default CheckBoxInput;

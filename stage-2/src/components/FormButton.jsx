const FormButton = () => (
  <button
    id={`btn__submit`}
    className="disabled:bg-primary-200 disabled:border-primary-200 focus:outline-none focus:ring focus:ring-primary-100 hover:bg-primary-700 hover:border-primary-700 py-[12px] px-[20px] border border-primary-600 bg-primary-600 rounded-lg text-white text-md font-semibold"
  >
    Send Message
  </button>
);

export default FormButton;

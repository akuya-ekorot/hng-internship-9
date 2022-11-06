import Footer from "../components/Footer";
import { Form } from "react-router-dom";
import FormInput from "../components/FormInput";
import { useState } from "react";

const Contact = () => {
  const [checked, setChecked] = useState(() => 0);

  return (
    <div className="w-full flex flex-col items-stretch pt-[64px] pb-[32px] md:pb-[64px] gap-[24px] md:px-[112px] px-[16px]">
      <section className="flex items-center justify-center">
        <main className="flex flex-col items-center justify-center py-[64px]">
          <div className="max-w-[720px] flex flex-col gap-[48px]">
            <header className="flex flex-col gap-[20px] md:p-0 px-[16px]">
              <h1 className="font-semibold text-display-md">Contact Me</h1>
              <p className="text-lg font-normal md:text-xl">
                Hi there, contact me to ask me about anything you have in mind.
              </p>
            </header>
            <Form className="flex flex-col gap-[32px] md:p-0 px-[16px]">
              <div className="flex md:flex-row flex-col gap-[24px]">
                <FormInput
                  label={`First Name`}
                  placeholder={`Enter your first name`}
                  type={`text`}
                  tabIndex={`1`}
                  id={`first_name`}
                  helperText={`Please enter your pretty first name. e.g Jane`}
                />
                <FormInput
                  label={`Last Name`}
                  placeholder={`Enter your last name`}
                  type={`text`}
                  tabIndex={`2`}
                  id={`last_name`}
                  helperText={`Now enter your amazing last name. e.g Doe`}
                />
              </div>
              <FormInput
                label={`Email`}
                placeholder={`yourname@email.com`}
                type={`email`}
                tabIndex={`3`}
                id={`email`}
                helperText={`Ensure your email is valid. It should be something like jane@doe.com`}
              />
              <FormInput
                label={`Message`}
                placeholder={`Send me a message and I'll reply as soon as possible...`}
                type={`textarea`}
                tabIndex={`4`}
                id={`message`}
              />
              <label
                onClick={() => setChecked((prevState) => prevState + 1)}
                className="relative pl-[32px]  text-md text-gray-600"
              >
                You agree to providing your data to Akuya Ekorot who may contact
                you.
                <input type={"checkbox"} className="hidden peer"></input>
                <div
                  className="mt-[2px] peer-disabled:border-gray-300 peer-disabled:bg-gray-100 focus:outline-none focus:bg-white focus:border focus:border-primary-300 focus:ring-[4px] focus:ring-primary-100 peer-checked:after:block after:hidden after:absolute after:-top-[4px] after:left-[3px] after:content-link peer-checked:bg-gray-50 peer-checked:border-primary-600 absolute top-0 left-0 h-[20px] w-[20px] bg-white border border-gray-300 rounded-md"
                  tabIndex="5"
                ></div>
              </label>
              <button
                id={`btn__submit`}
                className={`${
                  checked % 2 === 0
                    ? "bg-primary-200 border-primary-200"
                    : "border-primary-600 bg-primary-600 disabled:bg-primary-200 disabled:border-primary-200 focus:outline-none focus:ring focus:ring-primary-100 hover:bg-primary-700 hover:border-primary-700"
                } py-[12px] px-[20px] border rounded-lg text-white text-md font-semibold`}
              >
                Submit
              </button>
            </Form>
          </div>
        </main>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;

import Footer from "../components/Footer";
import { Form } from "react-router-dom";
import FormInput from "../components/FormInput";
import check from "../check.svg";
import CheckBoxInput from "../components/CheckBoxInput";
import FormButton from "../components/FormButton";

const Contact = () => {
  return (
    <div className="">
      <section className="flex items-center justify-center h-[800px]">
        <main className="flex flex-col items-center justify-center">
          <div className="max-w-[720px] flex flex-col gap-[48px]">
            <header className="flex flex-col gap-[20px]">
              <h1 className="text-display-md font-semibold">Contact Me</h1>
              <p className="text-xl font-normal">
                Hi there, contact me to ask me about anything you have in mind.
              </p>
            </header>
            <Form className="flex flex-col gap-[32px]">
              <div className="flex gap-[24px]">
                <FormInput
                  label={`First Name`}
                  placeholder={`Enter your first name`}
                  type={`text`}
                  tabIndex={`1`}
                />
                <FormInput
                  label={`Last Name`}
                  placeholder={`Enter your last name`}
                  type={`text`}
                  tabIndex={`2`}
                />
              </div>
              <FormInput
                label={`Email`}
                placeholder={`yourname@email.com`}
                type={`email`}
                tabIndex={`3`}
              />
              <FormInput
                label={`Message`}
                placeholder={`Send me a message and I'll reply as soon as possible...`}
                type={`textarea`}
                tabIndex={`4`}
              />
              <CheckBoxInput />
              <FormButton />
            </Form>
          </div>
        </main>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;

import Footer from "../components/Footer";
import { Form } from "react-router-dom";
import FormInput from "../components/FormInput";
import CheckBoxInput from "../components/CheckBoxInput";
import FormButton from "../components/FormButton";

const Contact = () => {
  return (
    <div className="w-full flex flex-col items-stretch pt-[64px] pb-[32px] md:pb-[64px] gap-[24px] md:px-[112px] px-[16px]">
      <section className="flex items-center justify-center">
        <main className="flex flex-col items-center justify-center py-[64px]">
          <div className="max-w-[720px] flex flex-col gap-[48px]">
            <header className="flex flex-col gap-[20px] md:p-0 px-[16px]">
              <h1 className="text-display-md font-semibold">Contact Me</h1>
              <p className="md:text-xl text-lg font-normal">
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
                />
                <FormInput
                  label={`Last Name`}
                  placeholder={`Enter your last name`}
                  type={`text`}
                  tabIndex={`2`}
                  id={`last_name`}
                />
              </div>
              <FormInput
                label={`Email`}
                placeholder={`yourname@email.com`}
                type={`email`}
                tabIndex={`3`}
                id={`email`}
              />
              <FormInput
                label={`Message`}
                placeholder={`Send me a message and I'll reply as soon as possible...`}
                type={`textarea`}
                tabIndex={`4`}
                id={`message`}
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

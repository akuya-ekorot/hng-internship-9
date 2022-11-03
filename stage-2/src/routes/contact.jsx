import Footer from "../components/Footer";
import { Form } from "react-router-dom";
import FormInput from "../components/FormInput";

const Contact = () => {
  return (
    <div className="w-full flex flex-col items-stretch pt-[64px] pb-[32px] md:pb-[64px] gap-[24px] md:px-[112px] px-[16px]">
      <section className="w-full flex items-stretch max-w-[1216px] m-auto">
        <main className="md:px-[32px] grow">
          <div className="content flex flex-col md:gap-[56px] gap-[32px]">
            <header className="flex flex-col gap-[20px]">
              <h1 className="text-display-md font-semibold">Contact Me</h1>
              <p className="text-xl font-normal">
                Hi there, contact me to ask me about anything you have in mind.
              </p>
            </header>
            <Form className="flex flex-col gap-[24px]">
              <div className="flex gap-[24px]">
                <FormInput
                  label={`First Name`}
                  placeholder={`Enter your first name`}
                  type={`text`}
                />
                <FormInput
                  label={`Last Name`}
                  placeholder={`Enter your last name`}
                  type={`text`}
                />
              </div>
              <FormInput
                label={`Email`}
                placeholder={`yourname@email.com`}
                type={`email`}
              />
              <FormInput
                label={`Message`}
                placeholder={`Send me a message and I'll reply as soon as possible...`}
                type={`textarea`}
              />
            </Form>
          </div>
        </main>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;

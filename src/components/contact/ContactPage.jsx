import { useState, useRef, Suspense } from "react";
import emails from "@emailjs/browser";
import { RingLoader, CircleLoader } from "react-spinners";
import { TextGenerateEffect } from "../naslov/TextGenerateEffect";
import Naslov from "../naslov/Naslov";

const ContactPage = () => {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      emails.send(
        "service_egjprxv",
        "template_12n4v5d",
        {
          from_name: form.name,
          to_name: "Mihajlo",
          from_email: form.email,
          to_email: "mihajlo.levi@proton.me",
          message: form.message,
        },
        "bZSK5TZly6EEjAfgm"
      );
      setLoading(false);
      alert("Your message has been sent!");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert("Email sending failed, please try again");
    }
  };

  return (
    <section id='contact' className='c-space my-20'>
      <div className='min-h-screen flex items-center justify-center flex-col bg-black-200 rounded-lg border border-black-300 '>
        <div className='contact-container relative'>
          {/* <TextGenerateEffect
            words='Contact Me'
            className='head-text text-center'
          /> */}
          <Naslov
            text='Contact Me'
            className='head-text text-center'
            duration={1.5}
          />

          <p className='text-lg text-white-600 mt-12'>
            If you would like to get in touch, feel free to send a message.
            Whether it is a question, a project idea, or just a quick hello, I
            would be happy to hear from you.
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col space-y-7'
          >
            <label className='space-y-3'>
              <span className='field-label'>Full Name</span>
              <input
                type='text'
                name='name'
                value={form.name}
                className='field-input'
                required
                onChange={handleChange}
              />
            </label>
            <label className='space-y-3'>
              <span className='field-label'>Email</span>
              <input
                type='email'
                name='email'
                value={form.email}
                required
                className='field-input'
                onChange={handleChange}
              />
            </label>
            <label className='space-y-3'>
              <span className='field-label'>Message</span>
              <textarea
                rows={5}
                type='text'
                required
                name='message'
                value={form.message}
                className='field-input'
                onChange={handleChange}
              />
            </label>
            <button
              type='submit'
              disabled={loading}
              className='btn w-full border border-white-600/[0.1] hover:bg-black-600 grid-subtext hover:text-white'
            >
              {loading ? (
                <>
                  <span className='flex items-center gap-2'>
                    <CircleLoader
                      size={20}
                      color='#afb0b6'
                      speedMultiplier={1}
                    />{" "}
                    Submitting..
                  </span>
                </>
              ) : (
                <>
                  <span className='flex items-center gap-2'>
                    <RingLoader
                      size={20}
                      color='#afb0b6'
                      speedMultiplier={0.7}
                    />
                    Submit
                  </span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;

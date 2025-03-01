import { useState, useRef, Suspense } from "react";
import emails from "@emailjs/browser";
import { RingLoader, CircleLoader } from "react-spinners";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "../hero/CanvasLoader";
import LittleRobot from "./LittleRobot";
import WalkingRobot from "./WalkingRobot";

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
          <h3 className='head-text text-center'>Contact Me</h3>
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
                placeholder='Your Full Name'
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
                placeholder='Your Email'
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
                placeholder='Message ...'
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
          <div className='absolute w-100px h-fit lg:w-150px -top-14 -right-40'>
            <Canvas>
              <directionalLight position={[15, -5, 40]} />
              <ambientLight intensity={3} />
              <pointLight position={[-10, -5, 20]} intensity={0.8} />
              <Suspense fallback={<CanvasLoader />}>
                <LittleRobot scale={2} position={[0, -3, 0]} />
              </Suspense>
            </Canvas>
          </div>
          <div className='absolute w-100px h-fit lg:w-150px -top-12 -left-40'>
            <Canvas>
              <directionalLight position={[25, -10, 40]} />
              <ambientLight intensity={1.8} />
              <pointLight position={[-10, 15, 20]} intensity={0.8} />
              <Suspense fallback={<CanvasLoader />}>
                <WalkingRobot
                  scale={2.3}
                  position={[0, -2.3, 0]}
                  rotation={[0, -0.37, 0]}
                />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;

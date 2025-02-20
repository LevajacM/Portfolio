import SocialIcons from "../navbar/SocialIcons";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <section className='c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center  gap-5'>
      <div className='text-white-500 flex w-[50%] justify-start items-center gap-2 '>
        <div>
          <p>Copyright © Mihajlo Levajac {year}.</p>
        </div>
      </div>

      <div className='text-white-500 flex  w-[50%] justify-end items-center pb-3 text-xl '>
        <SocialIcons />
      </div>
    </section>
  );
};

export default Footer;

import Naslov from "../naslov/Naslov";
import SocialIcons from "../navbar/SocialIcons";

const Footer = () => {
  return (
    <section className='c-space pt-5 pb-3 border-t border-black-300 flex justify-between items-center  gap-5'>
      <div className='text-white-500 flex w-[50%] justify-start items-center gap-2 '>
        <p>Copyright © Mihajlo Levajac 2025.</p>
      </div>

      <div className='text-white-500 flex  w-[50%] justify-end items-center pb-[6px] text-xl '>
        <SocialIcons />
      </div>
    </section>
  );
};

export default Footer;

import { VscGithub } from "react-icons/vsc";
import { FaSquareUpwork } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";

const SocialIcons = () => {
  const socialIconsList = [
    {
      href: "https://github.com/LevajacM",
      icon: <VscGithub />,
    },
    {
      href: "https://www.upwork.com/freelancers/~01092937d621a41c91?mp_source=share",
      icon: <FaSquareUpwork />,
    },
    {
      href: "mailto:mihajlo.levi@proton.me",
      icon: <HiOutlineMailOpen />,
    },
  ];

  return (
    <ul className='list-none flex gap-6 md:gap-7 lg:gap-8 justify-center text-neutral-400  items-center '>
      {socialIconsList.map((item) => {
        return (
          <li
            key={item.href}
            className='hover:text-white text-xl hover:scale-125 transition  duration-300 ease-in-out'
          >
            <a href={item.href} target='_blank'>
              {item.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialIcons;

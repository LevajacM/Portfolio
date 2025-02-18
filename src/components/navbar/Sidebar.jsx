import { navLinks } from "../utils/list";
import SocialIcons from "./SocialIcons";

const Sidebar = () => {
  return (
    <aside className='w-full h-auto flex flex-col sm:hidden transition  duration-300 ease-in-out delay-200 border-b border-t border-neutral-400  pb-4 z-20 '>
      <div className='w-full pb-4'>
        <ul className='list-none capitalize font-semibold '>
          {navLinks.map((item) => {
            return (
              <li key={item.id} className='hover:bg-black-200'>
                <a href={item.link}>
                  <p className='py-3 text-xl tracking-widest pl-5 hover:text-white hover:pl-8 duration-300 text-neutral-400 '>
                    {item.name}
                  </p>
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className='w-full h-auto pt-2 pb-1'>
        <SocialIcons />
      </div>
    </aside>
  );
};

export default Sidebar;

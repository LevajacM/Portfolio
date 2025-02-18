import { navLinks } from "../utils/list";

const NavItems = () => {
  return (
    <ul className='nav-ul'>
      {navLinks.map((item) => {
        return (
          <li key={item.id} className=' nav-li'>
            <a
              href={item.link}
              className='font-semibold text-neutral-400 capitalize nav-li_a'
            >
              {item.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;

import { links } from "../helpers"
import Logo from "./Logo"

const Navbar = () => {
  return (
    <div
      className='navbar'>
      <Logo />
      <ul>
        {links.map((link, i) => (
          <li
            key={i}
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar
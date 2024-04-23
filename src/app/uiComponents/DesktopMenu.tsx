import Link from "next/link"
const DesktopMenu = () => {
  return (
    <nav className="hidden md:block">
    <ul className="flex items-center gap-12">
      <li>
        <Link
          href="/"
          className=" hover:text-restaurant-secondary transition duration-300 ease-in-out"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          className=" hover:text-restaurant-secondary transition duration-300 ease-in-out"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          href="/contact"
          className=" hover:text-restaurant-secondary transition duration-300 ease-in-out"
        >
          Contact
        </Link>
      </li>
      <li>
        <Link
          href="/menu"
          className=" hover:text-restaurant-secondary transition duration-300 ease-in-out"
        >
          Menu
        </Link>
      </li>
    </ul>
  </nav>
  )
}
export default DesktopMenu
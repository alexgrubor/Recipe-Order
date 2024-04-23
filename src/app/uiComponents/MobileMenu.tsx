import Link from "next/link";
interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenu = ({ isOpen, toggleMenu }: MobileMenuProps) => {
  return (
    isOpen && (
      <nav className="md:hidden absolute top-full right-1 ">
        <ul className="flex flex-col items-center gap-12 bg-restaurant-primary p-3 px-4">
          <li>
            <Link
              href="/"
              className="text-white hover:text-restaurant-secondary transition duration-300 ease-in-out"
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-white hover:text-restaurant-secondary transition duration-300 ease-in-out"
              onClick={toggleMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-white hover:text-restaurant-secondary transition duration-300 ease-in-out"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/menu"
              className="text-white hover:text-restaurant-secondary transition duration-300 ease-in-out"
              onClick={toggleMenu}
            >
              Menu
            </Link>
          </li>
        </ul>
      </nav>
    )
  );
};

export default MobileMenu;

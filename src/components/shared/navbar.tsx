
import { Link } from "react-router-dom";
import GlobalSearch from "../pages/globalSearch";

const navLinks = [
  { name: "Uy", path: "/" },
  { name: "Haqida", path: "/about" },
  { name: "Kurslar", path: "/courses" },
  { name: "Bitiruvchilarimiz", path: "/graduates" },
];

const Navbar = () => {
  return (
    <div className="h-[10vh] backdrop-blur-sm flex border-b fixed z-40 inset-0 bg-background">
      <div className="container max-w-6xl h-[10vh] w-full mx-auto flex items-center justify-between">
        {/* ✅ Corrected: Added `to="/"` */}
        <Link to="/">
          <h1 className="text-3xl cursor-pointer">𝙎𝙠𝙮𝙢𝙞𝙣𝙙 𝘼𝙘𝙖𝙙𝙚𝙢𝙮</h1>
        </Link>

        <ul className="gap-2 hidden md:flex list-none">
          {navLinks.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className="hover:bg-blue-400/20 py-1 px-3 cursor-pointer rounded-b-sm transition-colors"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="gap-5 flex items-center">
          <GlobalSearch />
          <Link
            to="/auth"
            className="text-blue-600 hover:underline font-medium"
          >
            Kirish
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import { NavLink } from "react-router";
import { sidebarItems } from "../../sidebarData";
import Logo from "../logo/logo";

interface MobileSidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

export default function MobileSidebar({
  isSidebarOpen,
  toggleSidebar,
}: MobileSidebarProps) {
  return (
    <div
      className={`fixed left-0 top-0 z-50 h-full w-[250px]  bg-[#031434] border-[1px] border-(--border) transition-transform duration-300 lg:hidden ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Logo */}
      <div className="pt-6 pb-10 flex items-center justify-between px-3">
        <Logo />
        <span onClick={toggleSidebar}>
          <svg
            width="25"
            height="25"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.8337 4.1665L4.16699 15.8332M4.16699 4.1665L15.8337 15.8332"
              stroke="#696E71"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>

      {/* Navigation Items */}
      <aside className="text-white">
        {sidebarItems.map((section) => (
          <div className="mb-4">
            <ul className="text-[16px] leading-[24px] font-[600]">
              {section.items.map((item) => (
                <li key={item.id} className={item.id === 1 ? "mb-10" : ""}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `${isActive ? "text-white" : "text-white"}`
                    }
                    onClick={toggleSidebar}
                  >
                    {({ isActive }) => (
                      <div className="relative flex items-center w-full">
                        <div
                          className={`flex items-center gap-[15px] rounded-[8px] mx-[11px] px-4 w-full h-[40px] ${
                            isActive ? "bg-[var(--main)]" : "text-white"
                          }`}
                        >
                          <span>{item.icon(isActive)}</span>
                          <h2 className="text-[12px]">{item.Label}</h2>
                        </div>
                      </div>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>
    </div>
  );
}

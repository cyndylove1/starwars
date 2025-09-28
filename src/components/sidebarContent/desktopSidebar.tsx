import { NavLink } from "react-router";
import { sidebarItems } from "../../sidebarData";
import SidebarLogo from "../logo/SidebarLogo";

export default function DesktopSidebar() {
  return (
    <>
      <div className="h-screen flex-col w-[250px] hidden lg:flex border-r-[1px] border-(--border) bg-[var(--navyBlue)] transition-all duration-300 lg:flex">
        {/* Logo */}
        <div className="pt-6 pb-10 flex justify-center">
          {/* <MobileLogo /> */}
          <SidebarLogo />
        </div>
        {/* Navigation Items */}
        <aside className="text-white">
          {sidebarItems.map((section) => (
            <div className="">
              <ul className="text-[16px] leading-[24px] font-[600]">
                {section.items.map((item) => (
                  <li key={item.id} className={item.id === 1 ? "mb-10" : ""}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }: { isActive: boolean }) =>
                        `${isActive ? "text-white" : "text-white"}`
                      }
                    >
                      {({ isActive }: { isActive: boolean }) => (
                        <div className="relative flex items-center w-full">
                          {/* Icon & Label */}
                          <div
                            className={`flex items-center gap-[15px] rounded-[4px] mx-[11px] px-8 w-full h-[40px] ${
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
    </>
  );
}

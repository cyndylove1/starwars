import DesktopSidebar from "../desktopSidebar";
import MobileSidebar from "../mobileSidebar";


interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({
  isSidebarOpen,
  toggleSidebar,
}: SidebarProps) {
  return (
    <>
      <div className="">
        <DesktopSidebar />
      </div>

      <div className="">
        <MobileSidebar
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
      </div>
    </>
  );
}

import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg">
                    
        <SideBarIcon icon={<FaFire size="28" />} tooltip='Direct Messages' />
        <Divider />
        <SideBarIcon icon={<BsPlus size="32" />} tooltip='Add a Server' />
        <SideBarIcon icon={<BsFillLightningFill size="20" />} tooltip='Explore Public Servers' />
        <Divider />
        <SideBarIcon icon={<BsGearFill size="22" />} tooltip='Settings' />
    </div>
  )
};

const SideBarIcon = ({ icon, tooltip }) => {
  return (
    <div className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">
        {tooltip}
      </span>
    </div>
  )
};

const Divider = () => <hr className="sidebar-hr" />;

export default Sidebar;
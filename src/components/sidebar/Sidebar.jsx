import icon from '../../assets/sidebar_icon.svg';
import './Sidebar.scss';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <img src={icon} alt="" />
          Dashboard
        </li>
        <li>
          <img src={icon} alt="" />
          New License
        </li>
        <li>
          <img src={icon} alt="" />
          User List
        </li>
        <li>
          <img src={icon} alt="" />
          Change Request
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

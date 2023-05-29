import React from 'react';
import { Outlet } from 'react-router-dom';
const DashBoard = () => {
    return (
        <div>
            <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
   <Outlet/>
    <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" className="drawer-overlay"></label>
    <ul className="p-4 menu w-80 bg-base-100 text-base-content">

      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      
    </ul>
  </div>
</div>
        </div>
    );
};

export default DashBoard;
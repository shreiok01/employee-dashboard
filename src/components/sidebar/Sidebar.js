import React from "react";
import "../sidebar/sidebar.css";
import {Dashboard} from "@mui/icons-material"
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StoreIcon from "@mui/icons-material/Store";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="top1">
                <div className="logo">
                <span  className="all_list">
                    ALL LIST
                </span>
                </div>
                <hr />
                <div className="center">
                    <ul>
                        <p className="title">Main</p>
                        <li>
                            <Dashboard className="icon" />
                            <span >Dashboard</span>
                        </li>
                        <p className="title">LISTS</p>
                        <li>
                            <PersonOutlineIcon className="icon" />
                            <span>Users</span>
                        </li>
                        <li>
                            <StoreIcon className="icon" />
                            <span>Products</span>
                        </li>
                        <li>
                            <CreditCardIcon className="icon" />
                            <span>Orders</span>
                        </li>
                        <li>
                            <LocalShippingIcon className="icon" />
                            <span>Delivery</span>
                        </li>
                        <p className="title">USEFUL</p>
                        <li>
                            <InsertChartIcon className="icon" />
                            <span>Stats</span>
                        </li>
                        <li>
                            <NotificationsNoneIcon className="icon" />
                            <span>Notifications</span>
                        </li>
                        <p className="title">SERVICE</p>
                        <li>
                            <SettingsSystemDaydreamOutlinedIcon className="icon" />
                            <span>System Health</span>
                        </li>
                        <li>
                            <SettingsApplicationsIcon className="icon" />
                            <span>Setting</span>

                        </li>
                        <li>
                            <PsychologyOutlinedIcon className="icon" />
                            <span>Logs</span>
                        </li>
                        <p className="title">USER</p>
                        <li>
                            <AccountCircleOutlinedIcon className="icon" />
                            <span>Profile</span>
                        </li>

                        <li>
                            <ExitToAppIcon className="icon"/>
                            <span>Log Out</span>

                        </li>



                    </ul>

                </div>


            </div>
        </div>
    )

}

export default Sidebar;
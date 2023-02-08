import React from 'react';
import {NavLink} from "react-router-dom";

type NavBarLinkProps = {
    endpoint: string
    title: string
}

const NavBarLink = ({endpoint, title}: NavBarLinkProps) => {
    return (
        <NavLink
            style={{ textDecoration: 'none', color: 'black' }}
            className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"
            }
            aria-current="page"
            to={endpoint}
         >
            {title}
        </NavLink>
    );
}

export default NavBarLink;
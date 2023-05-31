import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, NavLinkProps } from "react-router-dom";
import { useState } from "react";

interface ILink {
    path: NavLinkProps & string
    icon: IconProp
    title: string
    links: ILinks[]
}

interface ILinks {
    path: string
    title: string
}

export default function Link({path, icon, title, links}:ILink) {

    const [ dropdown,setDropdown ] = useState<boolean>(false)

    return (
        <li className={`navigation-item ${!path ? "dropdown" : ""} ${dropdown ? "dropdown-show" : ""}`}>
            {path && 
                <NavLink to={path} className="navigation-link">
                    <FontAwesomeIcon icon={icon} className="navigation-icon" />
                    <span className="navigation-title">{title}</span>
                </NavLink>
            }

            {!path &&
                <>
                    <button onClick={() => setDropdown(()=> !dropdown)} className="navigation-link">
                        <FontAwesomeIcon icon={icon} className="navigation-icon" />
                        <span className="navigation-title">{title}</span>
                        <FontAwesomeIcon icon={icon} className="navigation-arrow" />
                    </button>
                    <ul className="submenu">
                        {links.map((link: ILinks, index: number) =>
                            <li key={index}>
                                <NavLink to={path} className="navigation-subMenuLink">
                                    <span className="navigation-subMenuTitle">{link.title}</span>
                                </NavLink>
                            </li>
                        )}
                    </ul>
                </>
            }
        </li>
    )
}
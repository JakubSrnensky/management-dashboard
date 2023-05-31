import { faXmark } from "@fortawesome/free-solid-svg-icons";

export const NAVIGATION = [{
    path: "/",
    icon: faXmark,
    title: "Dashboard",
    links:[]
},{
    path: "/email",
    icon: faXmark,
    title: "Dashboard",
    links:[]
},{
    path: "/calendar",
    icon: faXmark,
    title: "Dashboard",
    links:[]
},{
    path: "/chat",
    icon: faXmark,
    title: "Dashboard",
    links:[]
},{
    path: "/charts",
    icon: faXmark,
    title: "Dashboard",
    links:[]
},{
    path: undefined,
    icon: faXmark,
    title: "Submenu",
    links: [{
        path: "/",
            title: "Submenu A"
        },{
            path: "/",
            title: "Submenu B"
        }],
}]
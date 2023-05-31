import { ReactNode } from "react";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import './Layout.scss'

interface ILayout {
    children: ReactNode
}

export default function Layout({children}: ILayout) {
    return(
        <>
            <Navigation />
            <main className="layout-main">
                <Header/>
                <div className="layout-content">  
                    {children}
                </div>
            </main>
        </>
    )
}
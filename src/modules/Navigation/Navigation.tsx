import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { NavLinkProps } from "react-router-dom";
import { NAVIGATION } from "../../test_data/navigation";
import Link from "./components/Link";
import './Navigation.scss';

export default function Navigation() {
    return (
        <div className="navigation">
            {NAVIGATION.map((elements: unknown, index: number) =>
                <Link key={index} {...elements} />
            )}
        </div>
    )
}
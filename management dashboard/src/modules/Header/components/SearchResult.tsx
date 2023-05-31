import { Link } from "react-router-dom";
import Title from "../../../components/Title/Title";

export default function SearchResult({searching}: any) {
    return (
        <>
            {searching &&
                <ul className="header-searchResul">
                    <li>
                        <Title as="span">Výsledky vyhledávání</Title>
                    </li>
                    <li>
                        <Link to="/">
                            Test   
                        </Link>
                    </li>
                </ul>
            }
        </>
    )
}
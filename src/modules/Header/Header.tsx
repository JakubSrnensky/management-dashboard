import { useRef, useState } from "react";
import {InputText} from "../../components/Form/Input/InputText";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Header.scss'
import SearchResult from "./components/SearchResult";

export default function Header() {

    const inputRef = useRef<unknown | null>(null)

    const [ search, setSearch ] = useState<boolean>(false)
    const [ searchResult, setSearchResult ] = useState<string | null>()
    
    const handleChangeSearch = () => {
        setSearchResult(inputRef.current.value)
    }

    const handlerClickSearch = () => {
        setSearch(!search)

        if (search) {
            setSearchResult(null)
        }
    }

    return (
        <div className="header">
            <FontAwesomeIcon icon={search ? faXmark : faMagnifyingGlass} onClick={handlerClickSearch}/>
            {search &&
                <>
                    <InputText
                        type="text"
                        placeholder="Hledat ..."
                        ref={inputRef}
                        onChange={handleChangeSearch}
                    />
                    <SearchResult 
                        searching={searchResult}
                    />
                </>
            }   
        </div>
    )
}
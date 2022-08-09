import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../contexts/MainContext";


const Characters = ({type}) => {

    const { kana, selectedChars, setSelectedChars } = useContext(MainContext)
    
    useEffect(() => {
        //console.log(selectedChars)
    }, [selectedChars]);

    const selectRow = (rowIndex) => {
        let chars = kana[type][rowIndex].filter(c => c !== null).map(c => c.hex);
        let hasAll = chars.every(c => selectedChars.includes(c));
        selectChar(chars, !hasAll);
    }

    const selectChar = (hexCodes, add) => {
        setSelectedChars(x => {
            let result = add 
                ? [...x, ...hexCodes]
                : [...x].filter(c => !hexCodes.includes(c));
            return [...new Set(result)]
        })
    }

    const selectionStatus = (rowIndex) => {        
        let chars = kana[type][rowIndex].filter(c => c !== null).map(c => c.hex);
        let hasAll = chars.every(c => selectedChars.includes(c));
        let hasNone = chars.every(c => !selectedChars.includes(c));

        return hasNone
            ? "none"
            : hasAll 
                ? "all"
                : "some";
    }

    return <section id="char-select">
        <h4>Select characters</h4>
        <ul id="char-list">
            {kana[type].map((row,k) => <li key={k}>
                {row.map((c,i) => (
                    <div key={i} className="char">
                        <span
                            onClick={() => selectChar([c?.hex], selectedChars.indexOf(c?.hex) === -1)}
                            className={c !== null && selectedChars.indexOf(c.hex) > -1 ? "active" : ""} 
                            data-null={c === null}>
                            {c !== null && c.char}
                            {/* {c !== null && selectedChars.indexOf(c.hex) > -1 && <div className="icon check" />} */}
                        </span>
                    </div>
                ))}
                <div className="toggle-row">
                    <div className="btn" 
                        onClick={() => selectRow(k)}
                        data-selection={selectionStatus(k)}></div>
                </div>
            </li>)}
        </ul>
        <footer>
            <Link to={`/study-${type}`}>Study</Link>
        </footer>

    </section>
}

export default Characters;
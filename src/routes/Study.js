import { useContext, useEffect, useRef, useState } from "react";
import Icon from "../components/Icon";
import { MainContext } from "../contexts/MainContext";

const Study = ({type}) => {

    const { selectedChars, kana } = useContext(MainContext);
    const [ charList, setCharList ] = useState([]);
    const [ shuffledList, setShuffledList ] = useState([]);
    const [ activeChar, setActiveChar ] = useState(0);
    const inputRef = useRef(null);

    useEffect(() => {
        if(inputRef.current === null) return;
        inputRef.current.focus()
    }, [inputRef])

    useEffect(() => {
        let chars = kana[type].flat().filter(c => c !== null && selectedChars.includes(c.hex));
        setCharList(chars);
        let shuffled = shuffle(chars);
        setShuffledList(shuffled);
    }, [selectedChars, type, kana])

    const shuffle = (array) => {
        let currentIndex = array.length,  randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }      
        return array;
    }

    const InputHandler = () => {
        let { value } = inputRef.current;
        let {romanization} = shuffledList[activeChar];

        if(value === romanization) {
            inputRef.current.value = "";
            if(activeChar === charList.length - 1) {
                console.log("shuffe time");
                restartSession();
            } else {
                setActiveChar(x => {
                    return x + 1;
                })
            }
        } else if (value.length < romanization.length) {

        } else {
            console.log("incorrect spelling", romanization)
        }
    }

    const restartSession = () => {
        let shuffled = shuffle([...charList]);
        setShuffledList(shuffled);
        setActiveChar(0)
    }

    return <section id="study">
        <Icon name="check" />
        <div id="progress">
            <div className="progress-bar" style={{width: `${activeChar/charList.length * 100}%`}}></div>
        </div>
        <div id="characters">
            {shuffledList.map((c,k) => <div key={k} className={activeChar === k ? "active char" : "char"}>{c.char}</div>)}
        </div>
        
        <div id="answer-input">
            <input type="text" ref={inputRef} onBlur={() => inputRef.current.focus()}
            onChange={InputHandler}/>
        </div>

        <div id="actions">
            <div className="btn btn-skip">?</div>
            <div className="btn btn-skip">&gt;|</div>
        </div>
    </section>
}

export default Study;
import { useContext, useEffect, useState } from "react";
import { MainContext } from "../contexts/MainContext";

const Study = ({type}) => {

    const { selectedChars, kana } = useContext(MainContext);
    const [ charList, setCharList ] = useState([]);
    const [ shuffledList, setShuffledList ] = useState([]);
    const [ activeChar, setActiveChar ] = useState(0);

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

    return <section id="study">
        <div id="characters">
            {shuffledList.map((c,k) => <div key={k} className={activeChar === k ? "active char" : "char"}>{c.char}</div>)}
        </div>
    </section>
}

export default Study;
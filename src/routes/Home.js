import { Link } from "react-router-dom";

const Home = () => {
    return <section id="home">
        <header>
            <h1>Kana 101</h1>
        </header>

        <div id="kana-choice">
            <ul id="hiragana">
                <h2>Hiragana</h2>
                <li><Link to="/hiragana">Learn Characters</Link></li>
                <li><Link to="/write-hiragana">Practice Writing</Link></li>
            </ul>
            <ul id="katakana">
                <h2>Katakana</h2>
                <li><Link to="/katakana">Learn Characters</Link></li>
                <li><Link to="/write-katakana">Practice Writing</Link></li>
            </ul>
        </div>

    </section>
}

export default Home;
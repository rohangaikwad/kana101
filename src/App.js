import { Link } from "react-router-dom";

const App = () => {
    return <div>        
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
    </div>
}

export default App;
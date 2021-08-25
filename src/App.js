import '../src/assets/style/app.scss'
import Form from "./components/Form"
import Header from './components/Header';
import Table from './components/Table';


function App() {
    return (
        <div>
            <Header header="Car Management" />
            <Form/>
            <Table/>
        </div>
);
}

export default App;


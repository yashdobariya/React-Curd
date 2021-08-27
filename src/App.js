import { Component } from 'react';
import '../src/assets/style/app.scss'
import Form from "./components/Form"
import Header from './components/Header';
import Table from './components/Table';


class App extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            carsList: [],
            carName: '',
            modelName: '',
            carType: '',
            carFule: '',
            featureList: '',
            carOverview: '',
        }
    }

    handleCarList = (list) => {
        console.log(list);
    }

    changeInputField = (value) => {
        console.log(value);
        this.setState({
            // carName: value,
            modelName: value,
            // carType: value,
        })
    }

    render() {
        return (
            <div>
                <Header header="Car Management" />
                <Form
                    changeInputField= {this.changeInputField}
                    carName={this.state.carName}
                    modelName= {this.state.modelName}
                />
                <Table />
            </div>
        );
    }
}

export default App;


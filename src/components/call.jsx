import { Component } from 'react';
import { Text } from 'react-native';
import { APIInterpreter } from '../classes/apiInterpreter';

class Call extends Component {
    state = {
        loading: true,
        data: null,
    };

    interpreter = new APIInterpreter("nhsYlm1yrXKRvn1qJ-bqpD9HB3UDyvPx", true);

    async componentDidMount() {
        this.interpreter.login("oliver.lewis@masurao.jp", "password").then(() => this.interpreter.employees().then((data) => this.setState({ loading: false, data: data })));
    }

    DisplayData = () => {
        const employeesList = [];

        if (this.state.loading || !("data" in this.state))
            return (<Text>FORMATING ERROR</Text>);
        for (let employeeID = 0; employeeID < Object.keys(this.state.data).length; employeeID++) {
            const employeeData = this.state.data[employeeID];
            if ("name" in employeeData && employeeData["surname"])
                employeesList.push(<Text key={employeeID}>{employeeData["name"]} {employeeData["surname"]}{"\n"}</Text>)
            else
                employeesList.push(<Text key={employeeID}>FORMATING ERROR</Text>);
        }
        return (employeesList)
    }

    render() {
        return (
            <Text>
                {this.state.loading ?
                    "Loading..."
                    :
                    this.DisplayData()
                }
            </Text>
        )
    }
}

export default Call;

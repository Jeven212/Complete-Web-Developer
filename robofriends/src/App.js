import React, { Component }from "react";
import { CardList } from './Card';
import SearchBox from './SearchBox';
import Scroll from './Scroll';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ""
        };
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }

    render() {

        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });

        if(this.state.robots.length === 0) {
            return <h1>Loading...</h1>
        }
        else {
            return (
                <div className="">

                    <Scroll>

                        <div className='center'>
                            <h1>Robofriends</h1>
                        </div>

                    
                        <div className="center">
                            <SearchBox searchChange={this.onSearchChange}/>
                        </div>

                    </Scroll>
                    
                    <div className="space"></div>

                    <CardList robots={ filteredRobots }/>
                                        
                </div>
            );
        }
        
    }
}

export default App;
import React from 'react';

// Stateless component syntax
// function HelloWorld(props) {
//     return (
//         <h1>Hello {props.name}</h1>
//     );
// }

// component es6 class syntax
class HelloWorld extends React.Component {
    render() {
        return (
            <h1>Hello {this.props.name}</h1>
        );
    }
}

export default HelloWorld;
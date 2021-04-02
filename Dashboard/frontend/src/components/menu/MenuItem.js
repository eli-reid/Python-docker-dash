import { Component } from 'react';
import Nav from "react-bootstrap/Nav";
import Card from 'react-bootstrap/Card';

class MenuItem extends Component {

    constructor(props){
        super(props);
        this.id = props.id;
        this.className = props.className;
        this.name = props.name
        this.children = props.children;
        this.handleClick = props.handleClick !== undefined? props.handleClick : this.handleClick.bind(this) ;
    }; 

    handleClick(){
        return;

    };

    render(){
        return(
                <Nav.Item> 
                    <Card.Header>
                    <Nav.Link  href="#" onClick={this.handleClick}>
                        {this.name}
                    </Nav.Link>
                    </Card.Header>
                </Nav.Item>
        );};

}

export default MenuItem;
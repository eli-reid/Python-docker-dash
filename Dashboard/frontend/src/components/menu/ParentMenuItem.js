import MenuItem from "./MenuItem";
import ChildMenuItem from "./ChildMenuItem"
import Nav from "react-bootstrap/Nav";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
class ParentMenuItem extends MenuItem {

    render(){
        return(
            <Nav.Item>
                <Card>
                <Accordion.Toggle as={ Card.Header } eventKey={ this.id }>
                    <Nav.Link href={this.Link} onClick={this.handleClick}>{this.name}</Nav.Link>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={ this.id }>
                <>
                    { 
                        this.children.map(item => {
                        return <ChildMenuItem key={item.id.toString()} id={item.id} name={item.name} className="fff" handleClick={item.handleClick}/>   
                    })
                    }
                </>
                </Accordion.Collapse>
                </Card>
            </Nav.Item>
           
        );
    };
}
export default ParentMenuItem;
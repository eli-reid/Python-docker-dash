import MenuItem from "./MenuItem";
import Nav from "react-bootstrap/Nav";
class ChildMenuItem extends MenuItem{

    render(){
        return(
            <Nav.Link  href="#" onClick={this.handleClick}>
            {this.name}
            </Nav.Link>
        );};
}
export default ChildMenuItem;
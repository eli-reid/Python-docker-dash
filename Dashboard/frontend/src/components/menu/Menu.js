import React from 'react';
import ParentMenuItem from "./ParentMenuItem";
import Nav from "react-bootstrap/Nav";
import Accordion from 'react-bootstrap/Accordion';
import MenuItem from './MenuItem';
import menuItems from './TestMenu';


const MenuSideBar = (menu) => {
     return (
        <Accordion>
        <Nav defaultActiveKey="/home" className="flex-column">
           { 
                menuItems.map(item => {
                if(item.children.length > 0){
                    return <ParentMenuItem key={item.id} id={item.id} children={item.children} name={item.name} onclick={item.handleClick}/>
                }
                else{
                    return <MenuItem key={item.id} id={item.id} name={item.name} handleClick={item.handleClick}/>
                }
            })}
        </Nav>
        </Accordion>
        
    );
}

export default MenuSideBar
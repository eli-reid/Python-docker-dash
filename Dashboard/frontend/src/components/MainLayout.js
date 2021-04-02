import React from 'react';
import TitleBar from './title/TitleBar';
import MenuSideBar from './menu/Menu';


const BodyContent = () => {

    return (1);
}

const PageFooter = () =>{

    return (1);
};



const MainBody = () => {
    return(
    <>
        <TitleBar/>
        <div id="MenuSideBarDiv" style="">
            <MenuSideBar />
        </div>
        <div id="BodyContentDiv">
            <BodyContent/>
        </div>
        <PageFooter/>
    </>)
}


export default MainBody;


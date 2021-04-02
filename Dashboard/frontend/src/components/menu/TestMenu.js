const menuItems = [
    {
       name: "Home",
       className:"",
       id: 0,
       link: '#',
       handleClick : ()=>{alert('custom works')},
       children : []
    },
    {
        name: "Home1",
        className:"",
        id: 1,
        link: '#',
        children : []
     },
     {
        name: "Home2",
        className:"",
        id: 2,
        link: '#',
        children : [{
            name: "Home21",
            className:"",
            id: 21,
            link: '#',
            children : []
         },    {
            name: "Home22",
            className:"",
            id: 22,
            link: '#',
            children : []
         },    {
            name: "Home23",
            className:"",
            id: 23,
            link: '#',
            handleClick : ()=>{alert('custom works')},
            children : []
         }
        ]
     }

];
export default menuItems;
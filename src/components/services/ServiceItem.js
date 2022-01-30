import React from 'react';


const ServiceItem = ({service: {id, name, price, department}}) => {         
    
    return(
        <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{department}</td>
            <td>{price}</td>
            <td><button type="button" onClick={() => ServiceItem.handleClick(id)} className="btn btn-primary btn-sm">Add</button></td>
        </tr>                            
    )
}

ServiceItem.handleClick = (id)=>{
    console.log('Hello from handleClick ' + id);
};

export default ServiceItem;

import React, { useReducer} from 'react';
import Spinner from '../layout/Spinner';
import cartReducer from '../reducers/cartReducer';
import PropTypes from 'prop-types';
const currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }

const Services = ({services, loading, sqmprice, sqm}) => {    

const [cart, setCart] = useReducer(cartReducer, [])
function add(service) {
    setCart({ service, type: 'add' });
  }

  function remove(service) {
    setCart({ service, type: 'remove' });
  }

    var item_HTML_TABLE = "";
    if(!loading){
        item_HTML_TABLE = services.map(service => {
            return (<tr key={service.id}>
                <td>{service.id}</td>
                <td>{service.name}</td>
                <td>{service.department}</td>
                <td>{service.price}</td>
                <td><button type="button" onClick={() => {
          add(service)
        }} className="btn btn-primary btn-sm">Add</button></td>
        <td><button type="button" onClick={() => remove(service)} className="btn btn-primary btn-sm">Remove</button></td>
            </tr>)
            
        })
    }else{
        item_HTML_TABLE = <tr>
        <td></td>
        <td></td>
        <td><Spinner/></td>
        <td></td>
        <td></td>
    </tr>;
    }
    
        return <div className="container">
        <div className="row">
             <div className="col-md-12">
                 <div className="card">
                     <div className="card-header">
                         <h4>Services</h4>
                             
                     </div>
                     <div className='card-body'>
                        <div>Shopping Cart: {cart.length} total items.</div>
                        <div>SQM Price: {sqmprice} kr.</div>
                        <div>SQM: {sqm}.</div>
                        <div>Services: {Services.getTotal(cart)} kr.</div>
                        <div>Sum: {(Services.getSum(cart, sqmprice, sqm))} kr.</div>
                            <table className="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Department</th>
                                        <th>Price</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {item_HTML_TABLE}
                                </tbody>
                            </table>
                        </div>
                 </div>
             </div>
         </div>
    </div>;
}

Services.propTypes = {
    services: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

Services.getTotal = (cart) => {
    const total = cart.reduce((totalCost, item) => totalCost + item.price, 0);
    return total.toLocaleString(undefined, currencyOptions)
  }

Services.getSum = (cart, sqmprice, sqm) => {
    const total = cart.reduce((totalCost, item) => totalCost + item.price +(sqm*sqmprice), 0);
    return total.toLocaleString(undefined, currencyOptions)
  }

export default Services;

import React from 'react';
import Spinner from '../layout/Spinner';
import ServiceItem from './ServiceItem';
import PropTypes from 'prop-types';

const Services = ({services, loading}) => {

    var item_HTML_TABLE = "";
    if(!loading){
        item_HTML_TABLE = services.map(service => {
            return (<ServiceItem key={service.id} service={service}/>)
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
                         <table className="table table-bordered table-striped">
                             <thead>
                                 <tr>
                                     <th>ID</th>
                                     <th>Name</th>
                                     <th>Department</th>
                                     <th>Price</th>
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

export default Services;

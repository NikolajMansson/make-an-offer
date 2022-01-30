import React, { Component } from 'react';

export class Search extends Component {
    state = {
        text: '',
        sqm: ''
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.searchServices(this.state.text, this.state.sqm);
    };
    onChange = e => this.setState({[e.target.name]: e.target.value});
    
    render() {
        return <div>
            <form onSubmit={this.onSubmit} className='form'>
                <input type='text' name='text' placeholder='Search departments' value={this.state.text} onChange={this.onChange}/>
                <input type='text' name='sqm' placeholder='Sqm' value={this.state.sqm} onChange={this.onChange}/>
                <input type='submit' value='Search' className='btn btn-dark btn-block'/>
            </form>
        </div>;
    }         
}

export default Search;

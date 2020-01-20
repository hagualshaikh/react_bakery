import React, { Component } from 'react';
 import Button from './core/Button'
class List extends Component {
    render() { 
        return (
            <div className="row">
                <ul>
             {this.props.items.map((item,index)=>{
                 return(
             <li key={index} className="list-none">
                 <span className="fl w-5" >{item.name} </span>
             <span className='fr w-5 ' >: {item.price}</span>
             </li>);
             })}
             </ul>
            </div>
        );
    }
}
 
export default List;
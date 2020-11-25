import React, { Component } from 'react';
 
class Button extends Component {
    render() { 
        return (
            
                <button className ={this.props.isSelected ? "badge-primary " : "badge-danger "}
            
           onClick=  {this.props.onClickFn} 
           onChange ={this.onClickInputChange}
           value={this.props.name} 
         
           >
               
                {this.props.children}
             </button>
            
        );
    }
}
 
export default Button;
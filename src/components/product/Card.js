import React, { Component } from 'react';
 import  specimen from '../../../src/specimen.jpg' 
 import Button from '../core/Button'
class Card
 extends Component {
     constructor(props){
         super(props)
         this.state={
            source:specimen,
            cake:'',
            coffee:''
         }
    
     }
     componentDidMount(){
        
         fetch('http://konexio.codiscovery.co/bakery/api/?q='+this.props.item.name
         )
         .then(res =>res.json())
         .then(json =>{
          
           const  source=  json.source
           this.setState({
            source,
           
           })
         })
  
     }
    
    render() { 
        console.log('Card this.props', this.props);
        return (
            <div>
           <Button onClickFn  = {() => {this.props.onClickFn(this.props.item.price,this.props.item.name)}}>
               <img src= {this.state.source} alt="source" style={{width:'200px'}} />
           </Button>
            </div>
        );
    }
}
 
export default Card
;
import React, { Component } from 'react';
 import Button from './core/Button'
 import Card from './product/Card'
class Pay extends Component {
    constructor(props){
        super(props)
        this.state= {
            basket:[],
            total: 0,
            totalVat:0,
            totalEcoTax:0,
            totalAferTax:0
        }
        this.onClickProduct= this.onClickProduct.bind(this)
    }
    onClickProduct(price,name){
        console.log('price', price);
        console.log('name', name);
        console.log('onClickProduct',this.state)
      
        
        const ecoTax = 0.3;  
        const TVA = price*0.2;
        const total =   price+ ecoTax+TVA;
        const basket = this.state.basket;
        basket.push({price,name})
        this.setState({
            basket:basket,
          total:price + this.state.total,
          totalVat:this.state.totalVat+TVA,
          totalEcoTax:ecoTax+this.state.totalEcoTax ,
          totalAferTax:total+this.state.totalAferTax

        //   tax:3,
        //   TVA:9

        })
    
      }
    render() { 
        
        return (
            <div>
                {this.state.basket.map((item,index)=>{
                return <div key={'item'+index}>  {item.name}:{item.price} €</div>
                })}
                {this.props.items.map((item,index)=>{
                    return (
                        <div key={index}  className="m-5 d-inline" >
                            <Card item={item} onClickFn= {this.onClickProduct} />
                        </div>
                    );
                })}
               <div>total HT: {this.state.total} €</div>
          <div>TVA: {this.state.totalVat} €</div>
          <div>eco tax: {this.state.totalEcoTax} €</div>
          <div>total TTC: {this.state.totalVat} €</div>
            </div>
        );
    }
}
 
export default Pay;
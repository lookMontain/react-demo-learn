import { Component } from "react";
export default class CheckedBox extends Component{
    render(){
        const inStockOnly= this.props.inStockOnly
        const onChange=  this.props.onChange
        const innerChange=(event)=>{
            onChange(event.target.checked)
        }
        return (<div>
            <input type='checkbox' checked={inStockOnly} onChange={innerChange}/>
            Only show products in stock
        </div>)
    }
}
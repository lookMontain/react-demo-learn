import { Component } from "react";
class Search extends Component {
    render() {
        const text= this.props.text
        const onChange=  this.props.onChange
        const innerChange=(event)=>{
            onChange(event.target.value)
        }
        return (<div>
            <input value={text} placeholder="please search...."  onChange={innerChange}/>
        </div>)
    }
}
export default Search
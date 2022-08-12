import { Component } from 'react'
import './index.css'
import Search from './search'
import CheckedBox from './checkedBox'
import TableList from './tableList'
import { data } from './data'
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filterText: '',
            inStockOnly: false
        }
    }
    changeText(text) {

        this.setState({
            filterText: text
        })
    }
    changeInStockOnly(value) {
        this.setState({
            inStockOnly: value
        })
    }
    render() {
        const {filterText,inStockOnly} = this.state
        let list = data.filter(item => {
            if ((!filterText || (filterText && item.name.includes(filterText)))) {
                return item
            }
            return false
        })
        if(inStockOnly){
            list= list.filter(item=>item.stocked)
        }
        return (<div className='container'>
            <Search text={this.state.filterText} onChange={this.changeText.bind(this)} />
            <CheckedBox inStockOnly={this.state.inStockOnly} onChange={this.changeInStockOnly.bind(this)} />
            <TableList list={list} ></TableList>
        </div>)
    }
}
export default Home
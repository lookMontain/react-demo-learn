import { Component } from "react";
import ProductGroupRow from "./productGroupRow";
import ProductRow from "./productRow";
class Row extends Component {
    render() {
        const {rows ,category}= this.props.data
        return (
            <>
                <ProductGroupRow category={category} />
                {
                    rows.map(row=>{
                        return <ProductRow  row={row}  key={row.name} />
                    })
                }
               
            </>

        )
    }
}
export default Row
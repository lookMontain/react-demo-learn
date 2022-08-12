import { Component } from "react";
class ProductRow extends Component {
    render() {
        const { row } = this.props
        const name = row.stocked ? row.name : (<span style={{ color: 'red' }}>{row.name}</span>)
        return (
            <tr>
                <td>{name}</td>
                <td>{row.price}</td>
            </tr>
        )

    }
}
export default ProductRow
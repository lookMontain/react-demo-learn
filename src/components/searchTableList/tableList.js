import { Component } from "react";
import Row from './row'
class TableList extends Component {
    handleGroup(list) {
        const obj = {}
        list.forEach(item => {
            const { category } = item
            if (!obj[category]) {
                obj[category] = []
            }
            obj[category].push(item)
        });
        const rows = Object.keys(obj).map(key => {
            return {
                category: key,
                rows: obj[key]
            }
        })
        return rows
    }
    render() {
        const { list } = this.props
        // 把list 进行分组（）category
        const rows = this.handleGroup(list)
        return (<table className="tableList">
            <thead>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Price
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    rows.map(item => {
                        return <Row data={item} key={item.category} />
                    })
                }
            </tbody>

        </table>)
    }
}
export default TableList
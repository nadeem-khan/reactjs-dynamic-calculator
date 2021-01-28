
class SelectField extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <select disabled={this.props.disabled} name={this.props.cellData.type} id={this.props.cellData.id} value={this.props.cellData.operator} onChange={this.props.onItemUpdate}>
                <option value="1">+</option>
                <option value="2">-</option>
            </select>
        );

    }

}

export default SelectField;
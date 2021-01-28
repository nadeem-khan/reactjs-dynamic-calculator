
class InputField extends React.Component {

    render() {
        return (
            <input disabled={this.props.disabled} type='text' name={this.props.cellData.type} id={this.props.cellData.id} value={this.props.cellData.value} onChange={this.props.onItemUpdate} />
        );

    }

}

export default InputField;
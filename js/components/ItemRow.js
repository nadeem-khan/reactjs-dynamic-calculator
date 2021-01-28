import InputField from './InputField';
import SelectField from './SelectField';
class ItemRow extends React.Component {
    onDelEvent() {
        this.props.onDelEvent(this.props.item);
    }
    onDisableEvent() {
        this.props.onDisableEvent(this.props.item);
    }
    onEnableEvent() {
        this.props.onEnableEvent(this.props.item);
    }
    render() {
        var disabled = this.props.disabled;
        return (
            <li>
                <SelectField disabled={disabled} onItemUpdate={this.props.onItemUpdate} cellData={{
                    type: "operator",
                    value: this.props.item.price,
                    operator: this.props.item.operator,
                    id: this.props.item.id
                }} />
                <InputField disabled={disabled} onItemUpdate={this.props.onItemUpdate} cellData={{
                    type: "price",
                    value: this.props.item.price,
                    id: this.props.item.id
                }} />
                <input className="btn btn-danger" type="button" onClick={this.onDelEvent.bind(this)} value="Delete" />
                {(() => {
                    if (disabled) {
                        return (
                            <input className="btn btn-success" type="button" onClick={this.onEnableEvent.bind(this)} value="Enable" />
                        )
                    } else {
                        return (
                            <input className="btn btn-dark" type="button" onClick={this.onDisableEvent.bind(this)} value="Disable" />
                        )
                    }
                })()}
            </li>
        );

    }

}
export default ItemRow;

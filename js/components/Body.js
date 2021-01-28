
import ItemRow from './ItemRow';

class Body extends React.Component {

    render() {
        var onItemUpdate = this.props.onItemUpdate;
        var rowDel = this.props.onRowDel;
        var rowDisable = this.props.onRowDisable;
        var rowEnable = this.props.onRowEnable;
        var result = 0;
        var disabled = false;
        var item = this.props.items.map(function (item) {
            if (item.ignore == 0 && item.operator == 1) {
                result = parseInt(result) + parseInt(item.price);
            } else if (item.ignore == 0 && item.operator == 2) {
                result = parseInt(result) - parseInt(item.price);
            }
            if (item.ignore == 1) {
                disabled = true;
            } else if (item.ignore == 0) {
                disabled = false;
            }

            return (<ItemRow disabled={disabled} onItemUpdate={onItemUpdate} item={item} onEnableEvent={rowEnable.bind(this)} onDisableEvent={rowDisable.bind(this)} onDelEvent={rowDel.bind(this)} key={item.id} />)
        });
        return (
            <div className="container">
                <div className="row">
                    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                        <button type="button" onClick={this.props.onRowAdd} className="btn btn-success">Add row</button>
                        <ul className="calculator-ul">
                            {item}
                        </ul>
                        <h1 className="card-title pricing-card-title">Result: {parseInt(result)}</h1>
                    </div>
                </div>
            </div>
        );

    }

}
export default Body;
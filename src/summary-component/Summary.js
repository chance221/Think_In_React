import React, {Component} from 'react';


class Summary extends Component{
    

    render(){

        const {itemsSelected} = this.props;
        return(
            <section className="main__summary">
                <h3>NEW GREENLEAF 2018</h3>
                
                {this.props.handleSummary}
                
                <div className="summary__total">
                <div className="summary__total__label">Your Price: </div>
                <div className="summary__total__value">
                { 
                    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                    .format(this.props.total) }
                </div>
                </div>
            </section>
        )
    }
}

Summary.defaultProps = {
    itemsSelected:[],
    currentState:[],
    
}

export default Summary;
import React, {Component} from 'react';
import SummaryItem from '../SummaryItem/summary-item'

class Summary extends Component{
    

    render(){
        const selected = Object.keys(this.props.itemsSelected).map(key=>
            <SummaryItem
                itemsSelected = {this.props.itemsSelected}
                key = {key} 
                name= {key}
                />)
        const total = Object.keys(this.props.itemsSelected)
        .reduce((acc, curr) => acc + this.props.itemsSelected[curr].cost, 0);
        return(
            <section className="main__summary">
                <h3>NEW GREENLEAF 2018</h3>
                
                {selected}
                
                <div className="summary__total">
                <div className="summary__total__label">Your Price: </div>
                <div className="summary__total__value">
                { 
                    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                    .format(total) }
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
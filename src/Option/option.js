import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';

class Option extends Component{
/*What do you need to do to put each option in it's own container?

1. Set up container structure
2. Map each item accordingly
3. return each container with correct classes*/

    render()
    {   const options = Object.keys(this.props.features[this.props.key]).map((item, index) => {
            const selectedClass = item.name === this.state.selected[this.props.key].name ? 'feature__selected' : '';
            const featureClass = 'feature__option ' + selectedClass;
            return <li key={index} className="feature__item">
                <div className={featureClass}
                
                onClick={e => this.props.handleUpdateSummary(this.props.key, item)}>
                    { item.name }
                    ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                    .format(item.cost) })
                </div>
            </li>})
        return(
            <div className="feature" key={this.props.key}>
              <div className="feature__name">{this.props.name}</div>
              <ul className="feature__list">
                { options }
              </ul>
             </div>
        )
    }

}

export default Option;
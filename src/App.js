import React, { Component } from 'react';
import './App.css';
import Title from './title-component/Title';
import Options from './options-component/Options';
import Summary from './summary-component/Summary';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: {
        Processor: {
            name: '17th Generation Intel Core HB (7 Core with donut spare)',
            cost: 700
          },
        "Operating System": {
            name: 'Ubuntu Linux 16.04',
            cost: 200
          },
        "Video Card":{
            name: 'Toyota Corolla 1.5v',
            cost: 1150.98
          },
        Display: {
            name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
            cost: 1500
          }
      }
    }
  }

  updateFeature(itemsSelected, newValue) {
    
    console.log(`updating features`)
    const selected = Object.assign({}, itemsSelected);
    selected[itemsSelected] = newValue;
    this.setState({
      selected
    });
  }

  updateSummary = (selectedItems) =>{
    console.log(`updating summary`)
    Object.keys(selectedItems).map(key=>
      <div className="summary__option" key= {key}>
        <div className="summary__option__label"> {key}  </div>
        <div className="summary__option__value"> {selectedItems[key].name} </div>
        <div className="summary__option__cost">
          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                      .format(selectedItems[key].cost) }
        </div>
      </div>)
  }

  updateTotal = (selectedItems) =>{
    console.log(`updating total`)
    if(!selectedItems){
      selectedItems=this.state.selected
    }
    Object.keys(selectedItems)
          .reduce((acc, curr) => acc + selectedItems[curr].cost, 0); 
  }

  updateSelectedFeatures = (features, itemsSelected) =>{
    console.log(`updating selected features`)

    Object.keys(features)
          .map(key => {
            const options = features[key].map((item, index) => {
              const selectedClass = item.name === itemsSelected[key].name ? 'feature__selected' : '';
              const featureClass = 'feature__option ' + selectedClass;
              return <li key= {index} className="feature__item">
                <div className={featureClass}
                  
                  onClick={e => this.props.handleUpdateSummary(key, item)}>
                    { item.name }
                    ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                      .format(item.cost) })
                </div>
              </li>
            });

            return <div className="feature" key={key}>
              <div className="feature__name">{key}</div>
              <ul className="feature__list">
                { options }
              </ul>
            </div>
          });
  }


  render() {
    
    return (
      // title component
      <div className="App">
        <Title />
        <main>
        <Options 
          itemsSelected = {this.state.selected}
          features = {this.props.features}
          handleUpdateSelectedFeatures = { (features, itemsSelected)=>this.updateSelectedFeatures(this.props.features, this.state.selected)}
          handleUpdateSummary ={(itemsSelected)=> this.updateFeature(itemsSelected)}
        />
        <Summary
         itemsSelected = {this.state.selected}
         features = {this.props.features}
        />
        </main>
        
      </div>
    );
  }
}

export default App;  

// const summary = Object.keys(this.state.selected)
//           .map(key => <div className="summary__option" key={key}>
//             <div className="summary__option__label">{key}  </div>
//             <div className="summary__option__value">{this.state.selected[key].name}</div>
//             <div className="summary__option__cost">
//               { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
//                   .format(this.state.selected[key].cost) }
//             </div>
//         </div>)

//     const total = Object.keys(this.state.selected)
  
//           .reduce((acc, curr) => acc + this.state.selected[curr].cost, 0);    


//     const features = Object.keys(this.props.features)
//           .map(key => {
//             const options = this.props.features[key].map((item, index) => {
//               const selectedClass = item.name === this.state.selected[key].name ? 'feature__selected' : '';
//               const featureClass = 'feature__option ' + selectedClass;
//               return <li key={index} className="feature__item">
//                 <div className={featureClass}
                  
//                   onClick={e => this.updateFeature(key, item)}>
//                     { item.name }
//                     ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
//                       .format(item.cost) })
//                 </div>
//               </li>
//             });

//             return <div className="feature" key={key}>
//               <div className="feature__name">{key}</div>
//               <ul className="feature__list">
//                 { options }
//               </ul>
//             </div>
//           });      

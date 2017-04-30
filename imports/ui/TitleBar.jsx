
import React from 'react';


export default class TitleBar extends React.Component {

renderSubTitle() {
  if(this.props.subtitle) {
    return (<h4 className="title-bar__subtitle">{this.props.subtitle}</h4>);
  }
}

render() {
    return (
      <div className="title-bar">
        <div className="wrapper">
          <h3>{this.props.title}</h3>
          {this.renderSubTitle()}
        </div>
      </div>
    );
  }
}


// TitleBar.propTypes = {
//   title: React.PropTypes.string.isRequired,
//   subtitle: React.PropTypes.string.isRequired
// };
//
// TitleBar.defaultProps = {
//   title: 'Default title',
//   subtitle: 'Powered by Basem Elkimry'
// };

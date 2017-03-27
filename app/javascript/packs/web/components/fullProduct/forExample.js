import React from 'react';

export default class ForExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isHover: false};
  }

  render() {
    let {isHover} = this.state;
    return(
      <div className='product__for-example'
        onMouseEnter={()=> this.setState({isHover: true})}
        onMouseLeave={()=> this.setState({isHover: false})}
      >
        <h5>
          <b>Внимание! </b>
          <span>Продукт выставлен для примера</span>
        </h5>
        {isHover &&
            <p>
              Это значит, что на изготовление потребуется некоторое
              время и  готовый продукт будет немного отличаться от оригинала.
            </p>

        }
      </div>

    )
  }
}

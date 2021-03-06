// @flow
import React from 'react';

const race = ['English', 'French','Spanish'];


class Dropdown extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
      haveText: ""
    }
  }

  render() {
    const {isOpen, haveText} = this.state;

    return (
      <div
        className={isOpen ? "dropdown active" : "dropdown"}
        onClick={this.handleClick} >
        <div className="dropdown__text">
          {!haveText ? "English" : haveText}
        </div>
        {this.itemList(race)}
      </div>
    )
  }

 handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleText = (ev) => {
    this.setState({
      haveText: ev.currentTarget.textContent
    })
  }

  itemList = props => {
    const list = props.map((item) => (
      <div
        onClick={this.handleText}
        className="dropdown__item"
        key={item.toString()}>
        {item}
      </div>
    ));

    return (
      <div className="dropdown__items"> { list } </div>
    )
  }

}

export default Dropdown;
import React, { Component } from 'react';

import './Search.css';

import { MdSearch } from 'react-icons/md';

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *HEADER* COMPONENT

export default class Search extends Component {
  constructor (){
    super();
    this.state = {
      text: '',
    };
  }
  updateText = (text) =>{
    this.setState({text})
  }

  searchText = (text) =>{
    // console.log(encodeURI(text))
    const { searchTextFn } = this.props;

    searchTextFn( encodeURI(text) )
  }
  render() {
    const { text } = this.state;
    return (
      <section className="Search__parent">
        <div className="Search__content">
          <input value={text} placeholder="Search Your Feed" onChange={e => this.updateText(e.target.value)} />

          <MdSearch id="Search__icon" onClick={() => this.searchText(this.state.text)}/>
        </div>
      </section>
    );
  }
}

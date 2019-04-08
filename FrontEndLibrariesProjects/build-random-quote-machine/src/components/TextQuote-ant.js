import React from 'react';
import { Icon } from '@material-ui/core';

class TextQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        content:""
    }
  }

  componentDidMount() {
     
    fetch('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1')
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        return Promise.reject('something went wrong!')
      }
    })
    .then((data) => {
      this.setState({ content: data[0].content })
    }).catch(error => console.log('error is', error));

  }

  render() {
    const regex = /(<([^>]+)>)/ig;
    const result = this.state.content.replace(regex, '');

    return (
    <div><Icon>format_quote</Icon>
    {result}<Icon>format_quote</Icon>
    </div>)
  }
}

export default TextQuote;
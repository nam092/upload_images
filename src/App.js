import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      file: '',
      images: []
    }
  }

  _onChangeFile = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[i]);
      reader.onload = () => {
        this.setState({
          images: this.state.images.concat(reader.result)
        })
      }
    }

  }

  _onDelete=(index)=>{
 

        const arr = this.state.images.filter((ob,i)=> i!==index);
        this.setState({
          images : arr
        })
  
  }

  render() {
    const renderImages = this.state.images.map((img, index) => {
      return (
        <div className="wrapper-image">
          <img src={img} class="img-fluid" alt="" className="w3-animate-zoom" />
          <button key={index} onClick={()=>this._onDelete(index)}>x</button>
        </div>

      );
    })
    return (
      <div className="App">
        <input type="file" name="" multiple name="files[]" onChange={this._onChangeFile} />
        <div className="wrapper" >
            {
              renderImages
            }

        </div>
       
      </div>
    );
  }
}

export default App;

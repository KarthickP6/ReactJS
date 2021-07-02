import React, { Component } from 'react';
import axios from 'axios'
import QuestionCard from './QuestionCard';
import Sample from './Sample';
import Modal from './Modal';

class App extends Component {

  state = {
    item: [],
    index: 0,
    selected: undefined,
    userAnswer:[],
    errorMsg:"",
    score:"undefined",
    checked:false,
    show:false
  }

  componentDidMount = () => {
    this.handleGetData()

  }

  

  handleSubmit = () =>{



    console.log("submit button clicked")


    const _id = this.state.item[this.state.index]._id
    const answer = this.state.selected
      const ob = {
        _id,
        answer,
      }
      this.setState({ radioChecked: false });
      console.log(ob)
     
      
      this.setState({
        userAnswer:this.state.userAnswer.concat(ob)
      }); 

      var per;
    var url = "http://localhost:3001/quest/getScore"
    axios({
      method: 'post',
      url:url,
      data: this.state.userAnswer
    }).then((dat) => this.setState({
      score: dat.data.percentage
    }))
    .then(console.log(this.state.score))
   
  }


  handleReset = () =>{
    console.log("Reset button clicked")
    this.setState({
      item: this.state.item,
      index: 0,
      selected: undefined,
      userAnswer:[],
      errorMsg:"",
      score:"undefined",
      radioChecked: false 
    })
  }


  unCheckIt() {
    this.setState({
      checked:false
    });
  }
  checkIt() {
    this.setState({
      checked:true
    });
  }
  handleChange = (e) =>{
    // this.checkIt()
    console.log("clicked handleChange:"+ e.target.value)
    this.setState({
      selected: e.target.value,
      // checked:true
    })

  

}
  handlePrev = () =>{
    console.log("clicked next")

    var arr = this.state.item.length;
    var idx = this.state.index;
    
    console.log('initial: ' + idx);
    
    if (idx === 0) {
      var idx = arr - 1;
    } else {
      var idx = idx -1;
    }
    
    console.log('updated: ' + idx);
    
    this.setState({
      index: idx,
     
    });  
  }
  handleNext = () =>{
    console.log("clicked next")
    console.log('initial: ' + this.state.index);
    var arr = this.state.item.length;
    var idx = this.state.index + 1;
    var idx = idx % arr;
// this.unCheckIt()

  const _id = this.state.item[this.state.index]._id
  const answer = this.state.selected
    const ob = {
      _id,
      answer,
    }
    this.setState({ radioChecked: false });
    console.log(ob)
    console.log('updated: ' + idx);
    console.log('item length: ' + this.state.item.length);
    
    this.setState({
      index: idx,
      selected:"undefined",
      userAnswer:this.state.userAnswer.concat(ob)
    }); 
  }
  handleGetData = () => {

    console.log("componentDidMount")
    var url = "http://localhost:3001/quest/"
    axios.get(url).then((dat) => this.setState({
      item: dat.data
    }))
      .catch(e => console.log(e))

  }

  openModal = () =>{
    console.log("clicked modal")

    this.setState({
      show:true
    })
  }


   closeModal = () =>{
    console.log("clicked close modal")

    this.setState({
      show:false
    })
  }


  render() {
    return (

      <div>
        <header>
          <span>Quiz</span>
          <span>Reset</span>
        </header>
        {this.state.item.length===0?null:this.state.score==='undefine'?'':<QuestionCard 
        item ={this.state.item}
        index={this.state.index}
        selected={this.state.selected}
        userAnswer={this.state.item.userAnswer}
        errorMsg={this.state.errorMsg}
        score={this.state.score}
        checked={this.state.checked}
        handleNext={this.handleNext}
        handlePrev={this.handlePrev}
        handleSubmit={this.handleSubmit}
        handleReset={this.handleReset}
        handleChange={this.handleChange}
        >
          <div>QuestionCard component
        
            </div>
        </QuestionCard>
        }

        {/* {this.state.item.map((i)=>{
          return(<div>{i.quest}</div>)
        })} */}

        <div>
          <h2>{this.state.score==='undefined'?'':this.state.score}</h2>
        </div>

        <Sample>
          <div>Hi karthick</div>
          <Modal show={this.state.show} closeModal={this.closeModal}></Modal>
          <button onClick={this.openModal} >click</button>

        </Sample>
      </div>
    );
  }
}

export default App;
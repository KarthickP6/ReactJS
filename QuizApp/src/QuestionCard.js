import React, { Component } from 'react';

class QuestionCard extends Component {
    content = this.props;
    
    render() {
        return (
          <div>


          {this.props.item[this.props.index].quest}
              <div>
        <input type="radio" value={this.props.item[this.props.index].option1}  onChange={(e)=>this.props.handleChange(e)} name="gender" /> {this.props.item[this.props.index].option1} 
        <input type="radio" value={this.props.item[this.props.index].option2}  onChange={(e)=>this.props.handleChange(e)} name="gender" /> {this.props.item[this.props.index].option2} 
        <input type="radio" value={this.props.item[this.props.index].option3} onChange={(e)=>this.props.handleChange(e)} name="gender" /> {this.props.item[this.props.index].option3} 
        <input type="radio" value={this.props.item[this.props.index].option4}  onChange={(e)=>this.props.handleChange(e)} name="gender" /> {this.props.item[this.props.index].option4}
        </div>
        {this.props.item.length-1===this.props.index? <button onClick={this.props.handleReset}>Reset</button>: <button onClick={()=>this.props.handlePrev()}>Prev</button>}
         
        {this.props.item.length-1===this.props.index? <button onClick={this.props.handleSubmit}>Submit</button>: <button onClick={this.props.handleNext}>Next</button>}
           
      </div>
     
        );
    }
}

export default QuestionCard;
import React,{Component} from 'react'
import TodoItems from './TodoItems'
import "./App.css";

export default class App extends Component {

  state = {
    items:[]
  }

  // this method performs action when we click add button
 addItem =(event)=>{
     if(this._inputElement.value !== ""){
       //assign the value in newItem
       var newItem={
         text:this._inputElement.value,
         key:Date.now()
       }
        
       //update the state
       this.setState((prevState)=>{
          return {
            //update items array by adding current data
             items: prevState.items.concat(newItem)
          }
       })
       //empty the value and prevent default reload
       this._inputElement.value="";
       event.preventDefault();

     }
 }

  deleteItem = (key)=>{
     var filteredItems=this.state.items.filter(function(item){
       return (item.key!==key)
     })

     this.setState({
       items:filteredItems
     })
  }
  
 


  render(){
    return (
      <div className="todoListMain">
        <div className="header">
           <form onSubmit={this.addItem}>
             <input ref={(a) => this._inputElement = a}
             placeholder="Enter Task"></input>
             {/* Add Button */}
             <button type="submit">Add!</button>             
           </form>
           <TodoItems entries={this.state.items}
                      delete={this.deleteItem}/>
        </div>
      </div>
    )
  }
 
 
}


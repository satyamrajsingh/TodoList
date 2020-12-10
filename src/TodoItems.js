import React, { Component } from 'react'

export default class TodoItems extends Component {


    createTasks=(item)=>{
        return <li onClick={()=>this.delete(item.key)} key={item.key}>{item.text}</li>
    }

     //this delete method passes the key to app.js via deleteItem
    delete =(key)=>{
        this.props.delete(key);
    }

    render() {
        var todoEntries=this.props.entries;
        var listitems=todoEntries.map(this.createTasks);
 

        return (
            <div>
                <ul className="theList">
                   {listitems}
                </ul>
            </div>
        )
    }
}

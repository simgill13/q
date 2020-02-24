import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';



class Node {
  constructor(value){
    this.value = value,
    this.next = null
  }
}

class Queue {
  constructor(){
    this.front = null,
    this.back = null
  }

  isEmpty = () => {
    return this.front == null ? true : false
  }

  enqueue = (value) => {
    let node = new Node(value)

    if(this.isEmpty()){
      this.front = node;
      this.back = node;
    }else{
      this.back.next = node;
      this.back = node;
    }
    // this.print()
  }
  

  print = () => {
    if(this.isEmpty()) {
      console.log('q is empty')
    }else{
      let temparr = [];
      let temp = this.front;
     while(temp){
       console.log("",temp)
       temparr.push(temp.value)
       temp = temp.next
     }
      console.log(temparr)
    }
  }
}


const App =  () => {
  let testQ = new Queue()

  console.log(testQ)
  console.log(testQ.isEmpty())

  console.log(testQ.enqueue(1))
  console.log(testQ.enqueue(2))
  console.log(testQ.enqueue(3))
  

    return (
      <>
        <p>
          Start editing to see some magic happen :)
        </p>
      </>
    );
  
}

render(<App />, document.getElementById('root'));

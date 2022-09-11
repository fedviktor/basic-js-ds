const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Queue {
  list;
  // constructor(){
  //   this.head=null
  //   this.tail=null
  //   this.length=0
  // }
  getUnderlyingList() {
    return this.list
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  enqueue( value) {
      const node=new ListNode(value)
      if (this.list == undefined) this.list = node; 
    else {
      let current = this.list;

      while (current.next != null) {
     current = current.next;
    }
    current.next = new ListNode(value);
    }
    return this;
    
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  dequeue() {
    const current=this.list.value
    this.list=this.list.next
    // this.length--
    return current
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
  
}

module.exports = {
  Queue
};

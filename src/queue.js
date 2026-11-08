const { NotImplementedError } = require('../lib');
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
  start = null
  getUnderlyingList(node = this.start) {
    if (this.start = null) return {}
    if (node === null) return null
    return { value: node.value, next: this.getUnderlyingList(node.next) }
  }

  enqueue(value) {
    if (!this.start) {
      this.start = new ListNode(value)
      return
    }
    let node = this.start
    while (true) {
      if (node.next === null){
        node.next = new ListNode(value)
        return
      } 
      else {
        node = node.next
      }
    }
  }

  dequeue() {
    if(!this.start) return undefined
    let node = this.start
    this.start = node.next
    return node.value
  }
}

module.exports = {
  Queue
};

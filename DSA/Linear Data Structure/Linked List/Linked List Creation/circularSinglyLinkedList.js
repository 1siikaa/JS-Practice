class ListNode {
  constructor(value) {
    this.data = value;
    this.prev = null;
    this.next = null;
  }
}

class CircularSinglyLinkedList {
    constructor() {
      this.head = null;
    }
  
    append(value) {
      const newNode = new ListNode(value);
      if (!this.head) {
        this.head = newNode;
        newNode.next = this.head; // Points to itself
        return;
      }
      let current = this.head;
      while (current.next !== this.head) {
        current = current.next;
      }
      current.next = newNode;
      newNode.next = this.head;
    }
  }



  
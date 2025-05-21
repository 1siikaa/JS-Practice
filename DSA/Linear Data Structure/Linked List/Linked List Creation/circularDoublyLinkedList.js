class ListNode {
    constructor(value) {
      this.data = value;
      this.prev = null;
      this.next = null;
    }
  }
  
  class CircularDoublyLinkedList {
      constructor() {
        this.head = null;
      }
    
      append(value) {
        const newNode = new ListNode(value);
        if (!this.head) {
          this.head = newNode;
          newNode.next = this.head; // Points to itself
          newNode.prev = this.head; // Points to itself
          return;
        }
        const tail = this.head.prev
        tail.next = newNode;
        newNode.prev = tail;
        newNode.next = this.head;
        this.head.prev = newNode;
      }
    }
  
  
  
    
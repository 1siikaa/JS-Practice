class ListNode {
  constructor(value) {
    this.data = value;
    this.prev = null;
    this.next = null;
  }
}

class doublyLinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    let newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      return;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
      newNode.prev = current;
    }
  }
}


 // Test

const list = new doublyLinkedList();
list.append(50);
list.append(30);
list.append(70);
list.append(20);
list.append(40);
list.append(60);
list.append(80);

console.log("Doubly Linked List Head:", list.head);

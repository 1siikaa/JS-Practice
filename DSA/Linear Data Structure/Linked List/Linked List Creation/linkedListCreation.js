// Creating a linked list node
class ListNode {
    constructor(value) {
      this.data = value;
      this.next = null;
      
    }
  }
  
  // Creating a singly linked list
  class SinglyLinkedList {
    constructor() {
      this.head = null;
    }
  
    append(value) {
      const newNode = new ListNode(value);
      if (!this.head) {
        this.head = newNode;
        return;
      } else {
        let current = this.head
        while(current.next){
            current = current.next
        }
        current.next = newNode
      }
    }
  }
  
  // Test
  
  const list = new LinkedList();
  list.append(50);
  list.append(30);
  list.append(70);
  list.append(20);
  list.append(40);
  list.append(60);
  list.append(80);
  
  console.log("Linked List list:", JSON.stringify(list, null, 2));
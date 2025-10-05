// Node → holds data and a reference next.

// LinkedList → starts with an empty head.

//Node class
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
//LinkedList class
class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    const newNode = new Node(value);
    //Now initilize header if not present
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
  //Append at first
  preAppend(value) {
    const newNode = new Node(value);
    //Now initilize header if not present
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = newNode;
    current.next = this.head;
    this.head = current;
  }
  preAppendOpt(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }
  search(value) {
    let current = this.head;
    while (current) {
      if (current.data === value) return current;
      current = current.next;
    }
    return null;
  }
  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }
  delete(value) {
    //case 1: if list is empty
    if (!this.head) return;
    //case 2: if head is the node to delete
    if (this.head.data === value) {
      this.head = this.head.next;
      return;
    }
    //case 3: if the elm is at middle or end
    let current = this.head;
    while (current.next && current.next.data !== value) {
      current = current.next;
    }
    if (current.next) {
      //by pass the node to delete
      current.next = current.next.next;
    }
  }
  insertAtBeginning(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;
  }
  insertAtEnd(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
  insertAtSpecificPosition(value, pos) {
    if (pos < 0) return console.log("Invalid Position");

    const newNode = new Node(value);
    if(pos === 0){
        newNode.next = this.head
        this.head = newNode
    }
    let current = this.head
    let prev = null
    let index = 0
    while(current && index<pos){
        prev = current
        current = current.next
        index++
    }
    if(index!==pos)return console.log("Position out of range")

        newNode.next = current
        prev.next = newNode
  }
  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
// list.traverse();
// const num = list.search(4);
// console.log(num);
// const length = list.size();
// console.log("Lenght of linked list is:", length);
// list.delete(3);
list.insertAtBeginning(10);
list.insertAtEnd(20);
list.insertAtSpecificPosition(99,3)

list.traverse();

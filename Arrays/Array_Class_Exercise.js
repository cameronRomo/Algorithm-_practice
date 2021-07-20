class DynamicArray {
  constructor() {
    this.items = [];
  }

  print = () => {
    for (let i = 0; i < this.items.length; i++) {
      console.log(this.items[i]);
    }
  }

  insert = (item) => {
    this.items[this.items.length] = item;
  }

  removeAt = (index) => {
    if (index < 0 || index >= this.items.length) {
      console.error('Illegal Exception');
    }

    for (let i = index; i < this.items.length; i++) {
      this.items[i] = this.items[i + 1];
    }    
  
    return this.items.length--;
  }

  index = (item) => {
    return this.items.indexOf(item);
  }

  findLargest = () => {
    return Math.max(...this.items);
  }

  intersect = () => {
    let intersections = this.items.filter(item => otherArray.includes(item))
    return intersections
  }
  
  reverse = () => {
    let reversedArray = [];
    for (let i = this.items.length - 1; i >= 0; i--) {
      reversedArray.push(this.items[i]);
    }
    return reversedArray;
  }
}

const otherArray = [20, 30, 60];

let newArray = new DynamicArray(3);
newArray.insert(10);
newArray.insert(20);
newArray.insert(30);
newArray.insert(40);
// console.log(newArray.index(30));
// console.log(newArray.findLargest());
// console.log(newArray.intersect());
console.log(newArray.reverse());
// newArray.print();
let congressmen = [
  "Alcee Hastings",
  "Alfred Lawson",
  "Bill Posey",
  "Brian Mast",
  "Carlos Curbelo",
  "Charlie Crist",
  "Daniel Webster",
  "Darren Soto",
  "Debbie Wasserman Schultz",
  "Dennis Ross",
  "Francis Rooney",
  "Frederica Wilson",
  "Gus Bilirakis",
  "Ileana Ros-Lehtinen",
  "John Rutherford",
  "Kathy Castor",
  "Lois Frankel",
  "Mario Diaz-Balart",
  "Matt Gaetz",
  "Neal Dunn",
  "Stephanie Murphy",
  "Ted Deutch",
  "Ted Yoho",
  "Thomas Rooney",
  "Val Demings",
  "Vern Buchanan"
];

var sha1 = require("sha1");

function BinarySearchTree(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function(value) {
  let subtree = value < this.value ? "left" : "right";
  if (this[subtree]) {
    this[subtree].insert(value);
  } else {
    this[subtree] = new BinarySearchTree(value);
  }
};

BinarySearchTree.prototype.getMax = function(value) {
  if (this.right) {
    return this.right.getMax();
  } else {
    return this.value;
  }
};

BinarySearchTree.prototype.getMin = function(value) {
  if (this.left) {
    return this.left.getMin();
  } else {
    return this.value;
  }
};

BinarySearchTree.prototype.contains = function(value) {
  if (this.value === value) {
    return true;
  }
  let subtree = value < this.value ? "left" : "right";
  if (this[subtree]) {
    return this[subtree].contains(value);
  } else {
    return false;
  }
};

let data = [];

for (let i = 0; i < congressmen.length; i++) {
  data.push(sha1(congressmen[i]));
}

let flcongressmen = new BinarySearchTree("D");

for (let j = 0; j < data.length; j++) {
  flcongressmen.insert(data[j]);
}

console.log("Hash ", data);
let getMinCongressMen = flcongressmen.getMin();
console.log("Minimu Congress Man is", getMinCongressMen);
var n = data.indexOf(getMinCongressMen);
console.log("The name is", congressmen[n]);
console.log(flcongressmen.contains("D"));

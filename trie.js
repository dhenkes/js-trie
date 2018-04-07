class Node {
  constructor (value = null) {
    this.value = value;
    this.terminal = false;
    this.children = {};
  }
}

class Trie {
  constructor () {
    this.root = new Node();
  }

  insert (value = '') {
    let node = this.root;
    for (let i = 0; i < value.length; i++) {
      if (!node.children[value[i]]) {
        node.children[value[i]] = new Node(value[i]);
      }

      node = node.children[value[i]];
      if (i === value.length - 1) {
        node.terminal = true;
      }
    }
  }

  find (value = '') {
    let node = this.root;
    for (let i = 0; i < value.length; i++) {
      if (!node.children[value[i]]) {
        return null;
      }

      node = node.children[value[i]];
    }

    return node;
  }
}

module.exports = Trie;

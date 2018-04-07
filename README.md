# js-trie

This is a simple javascript trie implementation.

## How does it work?

```javascript
// Create a new trie
const trie = new Trie();

// Insert new values
trie.insert('testing');
trie.insert('test');
trie.insert('tested');

// Find inserted values
trie.find('abc'); // Returns null
trie.find('testing'); // Returns node, terminal true
trie.find('tested'); // Returns node, terminal true
trie.find('teste'); // Returns node, terminal false
```

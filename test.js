const tape = require('tape');
const Trie = require('./index');

const trie = new Trie();

trie.insert('testing');
trie.insert('test');
trie.insert('tested');
trie.insert('dominique');
trie.insert('partial');

tape('find testing', (t) => {
  const node = trie.find('testing');

  t.deepEqual(node.value, 'g', 'should return last letter as value');
  t.deepEqual(node.terminal, true, 'should be terminal');
  t.end();
});

tape('find test', (t) => {
  const node = trie.find('test');

  t.deepEqual(node.value, 't', 'should return last letter as value');
  t.deepEqual(node.terminal, true, 'should be terminal');
  t.end();
});

tape('find tested', (t) => {
  const node = trie.find('tested');

  t.deepEqual(node.value, 'd', 'should return last letter as value');
  t.deepEqual(node.terminal, true, 'should be terminal');
  t.end();
});

tape('find dominique', (t) => {
  const node = trie.find('dominique');

  t.deepEqual(node.value, 'e', 'should return last letter as value');
  t.deepEqual(node.terminal, true, 'should be terminal');
  t.end();
});

tape('find partial', (t) => {
  const node = trie.find('partial');

  t.deepEqual(node.value, 'l', 'should return last letter as value');
  t.deepEqual(node.terminal, true, 'should be terminal');
  t.end();
});

tape('find non_existing', (t) => {
  const node = trie.find('non_existing');

  t.deepEqual(node, null, 'should return null');
  t.end();
});

tape('find part', (t) => {
  const node = trie.find('part');

  t.deepEqual(node.value, 't', 'should return last letter as value');
  t.deepEqual(node.terminal, false, 'should not be terminal');
  t.end();
});

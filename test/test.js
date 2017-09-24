"use strict";

const assert = require("assert");
const Trie = require("../");

describe("Radix Trie", () => {
  describe("Add", () => {
    it("add a value to the tree.", () => {
      const trie = new Trie().add("foo", 5);

      assert.equal(trie.get("foo"), 5);
    });

    it("add two values to the tree, compressed.", () => {
      const trie = new Trie().add("foo", 5).add("foos", 9);

      assert.equal(trie.get("foo"), 5);
      assert.equal(trie.get("foos"), 9);
    });
  });

  describe("Get", () => {
    it("gets a value when it exists", () => {
      const trie = new Trie().add("bar", 15).add("barstool", false);

      assert.equal(trie.get("bar"), 15);
      assert.equal(trie.get("barstool"), false);
    });

    it("returns null when a value does not exist", () => {
      const trie = new Trie().add("bar", 15).add("barstool", false);

      assert.equal(trie.get("barkeep"), null);
      assert.equal(trie.get("barstool"), false);
    });
  })
});

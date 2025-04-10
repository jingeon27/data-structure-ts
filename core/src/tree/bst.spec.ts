import { BinarySearchTree } from './bst';

describe('BinarySearchTree', () => {
  it('should insert nodes and build the correct structure', () => {
    const bst = new BinarySearchTree<number>();
    bst.insert(5);
    bst.insert(3);
    bst.insert(8);
    bst.insert(1);
    bst.insert(4);
    bst.insert(9);

    const result = bst.toArray();

    expect(result).toContainEqual({ value: 5, left: 3, right: 8 });
    expect(result).toContainEqual({ value: 3, left: 1, right: 4 });
    expect(result).toContainEqual({ value: 8, left: null, right: 9 });
    expect(result).toContainEqual({ value: 1, left: null, right: null });
    expect(result).toContainEqual({ value: 4, left: null, right: null });
    expect(result).toContainEqual({ value: 9, left: null, right: null });
  });

  it('should find existing values in the tree', () => {
    const bst = new BinarySearchTree<number>();
    [5, 3, 8, 1, 4, 9].forEach((v) => bst.insert(v));

    expect(bst.find(3)).toBe(true);
    expect(bst.find(8)).toBe(true);
    expect(bst.find(1)).toBe(true);
    expect(bst.find(100)).toBe(false);
  });

  it('should not insert duplicate values', () => {
    const bst = new BinarySearchTree<number>();
    bst.insert(5);
    bst.insert(3);
    bst.insert(3); // duplicate

    const result = bst.toArray();
    const count3 = result.filter((node) => node.value === 3).length;

    expect(count3).toBe(1);
  });

  it('should return empty array if no insertions made', () => {
    const bst = new BinarySearchTree<number>();
    expect(bst.toArray()).toEqual([]);
  });
});

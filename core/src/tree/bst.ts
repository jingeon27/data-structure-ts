import { TreeNode } from './tree';

export class BinarySearchTree<T> {
  root: TreeNode<T> | null = null;

  insert(value: T): void {
    this.root = this._insert(this.root, value);
  }

  private _insert(node: TreeNode<T> | null, value: T): TreeNode<T> {
    if (node === null) return new TreeNode(value);

    if (value < node.value) {
      node.left = this._insert(node.left, value);
    } else if (value > node.value) {
      node.right = this._insert(node.right, value);
    }
    return node;
  }

  contains(value: T): boolean {
    return this._contains(this.root, value);
  }

  private _contains(node: TreeNode<T> | null, value: T): boolean {
    if (node === null) return false;
    if (value === node.value) return true;
    return value < node.value
      ? this._contains(node.left, value)
      : this._contains(node.right, value);
  }

  inorder(): T[] {
    const result: T[] = [];
    this._inorder(this.root, result);
    return result;
  }

  private _inorder(node: TreeNode<T> | null, result: T[]) {
    if (!node) return;
    this._inorder(node.left, result);
    result.push(node.value);
    this._inorder(node.right, result);
  }
}

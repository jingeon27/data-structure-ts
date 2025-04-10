import { TreeNode, TreeNodeData } from './tree';

export class BinarySearchTree<T> {
  private root: TreeNode<T> | null = null;

  insert(value: T): void {
    const insertNode = (node: TreeNode<T> | null, value: T): TreeNode<T> => {
      if (node === null) return new TreeNode(value);

      if (value < node.value) node.left = insertNode(node.left, value);
      else if (value > node.value) node.right = insertNode(node.right, value);
      // 중복은 무시
      return node;
    };

    this.root = insertNode(this.root, value);
  }

  find(value: T): boolean {
    let current = this.root;
    while (current) {
      if (value === current.value) return true;
      current = value < current.value ? current.left : current.right;
    }
    return false;
  }

  toArray(): TreeNodeData<T>[] {
    const result: TreeNodeData<T>[] = [];

    const traverse = (node: TreeNode<T> | null) => {
      if (!node) return;
      result.push({
        value: node.value,
        left: node.left ? node.left.value : null,
        right: node.right ? node.right.value : null,
      });
      traverse(node.left);
      traverse(node.right);
    };

    traverse(this.root);
    return result;
  }
}

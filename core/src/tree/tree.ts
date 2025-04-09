export class TreeNode<T> {
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;

  constructor(readonly value: T) {}
}

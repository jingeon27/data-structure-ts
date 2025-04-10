type NodeValue<T> = T | null;
export interface TreeNodeData<T> {
  value: T;
  left: NodeValue<T>;
  right: NodeValue<T>;
}

export class TreeNode<T> {
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;

  constructor(readonly value: T) {}
}

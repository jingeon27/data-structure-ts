export function bindMethods<T extends object>(instance: T) {
  return <K extends keyof T>(...methods: K[]): Pick<T, K> => {
    return methods.reduce((acc, key) => {
      const fn = instance[key];
      if (typeof fn === 'function') {
        acc[key] = fn.bind(instance);
      }
      return acc;
    }, {} as any);
  };
}

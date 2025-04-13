export type FunctionKeys<T> = {
  [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T];

export function bindMethods<T extends object>(instance: T) {
  return <K extends FunctionKeys<T>>(...methods: [K, ...K[]]): Pick<T, K> => {
    return methods.reduce(
      (acc, key) => {
        const fn = instance[key];
        if (typeof fn === 'function') {
          acc[key] = fn.bind(instance);
        }
        return acc;
      },
      {} as Pick<T, K>,
    );
  };
}

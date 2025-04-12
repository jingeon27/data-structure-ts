export type FunctionKeys<T> = {
  [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T];

export type BindableMethods<T, K extends keyof T> = {
  [P in K]: T[P] extends Function ? T[P] : never;
};

export function bindMethods<T extends object>(instance: T) {
  return <K extends FunctionKeys<T>>(...methods: K[]): BindableMethods<T, K> => {
    return methods.reduce((acc, key) => {
      const fn = instance[key];
      if (typeof fn === 'function') {
        acc[key] = fn.bind(instance);
      }
      return acc;
    }, {} as any);
  };
}

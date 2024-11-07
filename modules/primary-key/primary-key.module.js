const primaryKeyStore = new Map();
const services = Object.freeze({
  get(name) {
    if (!primaryKeyStore.has(name)) primaryKeyStore.set(name, 0);
    return primaryKeyStore.get(name);
  },
  increment(name) {
    const next = primaryKeyStore.get(name) + 1;
    primaryKeyStore.set(name, next);
    return next;
  },
});

export const usePK = (name) => ({
  get: () => services.get(name),
  increment: () => services.increment(name),
});

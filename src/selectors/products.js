export const selectFilteredProducts = state => {
  const term = state.products.searchTerm.trim().toLowerCase();

  if (!term) {
    return state.products.items;
  }

  return state.products.items.filter(
    product =>
      product.model.toLowerCase().includes(term) || product.brand?.toLowerCase().includes(term)
  );
};

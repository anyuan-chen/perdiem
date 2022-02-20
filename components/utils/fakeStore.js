// we don't know how to use redux so we
// treat localstorage as a terrible version
// of redux

// data goes in the top-level for convenience

const FakeStoreBuilder = {
  // declare getters/setters straight to localStorage in data
  data: {
    /**
     * @returns {number=}
     */
    get budget() {
      return localStorage.budget || 0;
    },

    set budget(val) {
      localStorage.budget = val;
    },
  },
  // declare getters that need processing through computed
  computed: {},
};

const FakeStore = { ...FakeStoreBuilder.data, ...FakeStoreBuilder.computed };

export default FakeStore;

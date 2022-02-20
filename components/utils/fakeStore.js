// we don't know how to use redux so we
// treat localstorage as a terrible version
// of redux

const FakeStore = {
  /**
   * @returns {number=}
   */
  get budget() {
    return localStorage.budget || 0;
  },

  set budget(val) {
    localStorage.budget = val;
  },
};

export default FakeStore;

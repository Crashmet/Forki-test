const menuNavStore = {
  namespaced: true,
  state: {
    menuNames: [
      { name: 'Преимущества Tele2', isActive: true },
      { name: 'Тарифы', isActive: false },
      { name: 'Акции и спецпредложения', isActive: false },
      { name: 'Промотариф Tele2', isActive: false },
      { name: 'Технология eSIM', isActive: false },
      { name: 'Подключение нового абонента', isActive: false },
    ],
  },

  getters: { menuNames: ({ menuNames }) => menuNames },

  mutations: {
    SET_MENU_STATUS(state, name) {
      state.menuNames.forEach((el) => {
        el.isActive = false;
        if (el.name === name) {
          el.isActive = true;
        }
      });
    },
  },

  actions: {
    setMenuStatus({ commit }, name) {
      commit('SET_MENU_STATUS', name);
    },
  },
};

export default menuNavStore;

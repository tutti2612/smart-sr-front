import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    student: {
      name: "土屋浩平",
      classroom: "3年7組",
      address: "東京都大田区南雪谷1-10-15 エクセール雪谷102",
      club: "卓球部",
      sex: "男",
      height: 165,
      weight: 60,
      age: 30,
      tel: "08065048680",
      mail: "doyahirohira@gmail.com"
    },
    students: [
      {
        id: 1,
        name: "土屋浩平",
        classroom: "3年7組"
      },
      {
        id: 2,
        name: "田中太郎",
        classroom: "3年6組"
      }
    ]
  },
  getters: {
    student: (state) => state.student,
    students: (state) => state.students
  },
  mutations: {},
  actions: {},
  modules: {}
});

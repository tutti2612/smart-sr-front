import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

const URL = "http://54.168.220.211:8080";

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
    students: []
  },
  getters: {
    student: (state) => state.student,
    students: (state) => state.students
  },
  mutations: {
    setStudent(state, payload) {
      state.student = payload.student;
    },
    setStudents(state, payload) {
      state.students = payload.students;
    }
  },
  actions: {
    async getStudent({ commit }, id) {
      try {
        const res = await axios.get(`${URL}/student/${id}`);
        commit("setStudent", { student: res.data });
      } catch (error) {
        console.error(error);
      }
    },
    async getStudents({ commit }) {
      try {
        const res = await axios.get(`${URL}/students`);
        commit("setStudents", { students: res.data });
      } catch (error) {
        console.error(error);
      }
    }
  },
  modules: {}
});

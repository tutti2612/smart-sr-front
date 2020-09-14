import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

const URL = "http://localhost:8081";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    student: {},
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

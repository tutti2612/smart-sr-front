import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

const BASE_STUDENT_URL = process.env.VUE_APP_STUDENT_URL;
const GET_STUDENT_URL = BASE_STUDENT_URL + "/student";
const GET_STUDENTS_URL = BASE_STUDENT_URL + "/students";

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
        const res = await axios.get(GET_STUDENT_URL + "/" + id);
        commit("setStudent", { student: res.data });
      } catch (error) {
        console.error(error);
      }
    },
    async getStudents({ commit }) {
      try {
        const res = await axios.get(GET_STUDENTS_URL);
        commit("setStudents", { students: res.data });
      } catch (error) {
        console.error(error);
      }
    }
  },
  modules: {}
});

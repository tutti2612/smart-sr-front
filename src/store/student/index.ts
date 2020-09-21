import axios from "axios";

const BASE_STUDENT_URL = process.env.VUE_APP_STUDENT_URL;
const GET_STUDENT_URL = BASE_STUDENT_URL + "/student";
const GET_STUDENTS_URL = BASE_STUDENT_URL + "/students";

type params = { name: string; classroom: string };

const state = {
  student: {},
  students: []
};

const getters = {
  student: (state: { student: any }) => state.student,
  students: (state: { students: any }) => state.students
};

const actions = {
  async getStudent({ commit }: any, id: number) {
    try {
      const res = await axios.get(GET_STUDENT_URL + "/" + id);
      commit("setStudent", { student: res.data });
    } catch (error) {
      console.error(error);
    }
  },
  async getStudents({ commit }: any, params: params) {
    try {
      const res = await axios.get(GET_STUDENTS_URL, {
        params: params
      });
      commit("setStudents", { students: res.data });
    } catch (error) {
      console.error(error);
    }
  }
};

const mutations = {
  setStudent(state: { student: any }, payload: { student: any }) {
    state.student = payload.student;
  },
  setStudents(state: { students: any }, payload: { students: any }) {
    state.students = payload.students;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

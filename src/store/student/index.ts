import axios from "axios";

const BASE_STUDENT_URL = process.env.VUE_APP_STUDENT_URL;
const GET_STUDENT_URL = BASE_STUDENT_URL + "/student";
const GET_STUDENTS_URL = BASE_STUDENT_URL + "/students";
const CREATE_STUDENT_URL = BASE_STUDENT_URL + "/student";
const DELETE_STUDENT_URL = BASE_STUDENT_URL + "/student";

type getStudentsParams = { name: string; classroom: string };

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
      console.log(res);
      commit("setStudent", { student: res.data });
    } catch (error) {
      console.error(error);
    }
  },
  async getStudents({ commit }: any, params: getStudentsParams) {
    try {
      const res = await axios.get(GET_STUDENTS_URL, {
        params: params
      });
      console.log(res);
      commit("setStudents", { students: res.data });
    } catch (error) {
      console.error(error);
    }
  },
  async createStudent({ commit }: any, params: any) {
    try {
      const res = await axios.post(CREATE_STUDENT_URL, params);
      console.log(res);
      commit("setStudent", { student: res.data });
    } catch (error) {
      console.error(error);
    }
  },
  async deleteStudent({ commit }: any, id: number) {
    try {
      const res = await axios.delete(DELETE_STUDENT_URL + "/" + id);
      console.log(res);
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

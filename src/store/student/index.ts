import axios from "axios";

const BASE_STUDENT_URL = process.env.VUE_APP_STUDENT_URL;
const GET_STUDENT_URL = BASE_STUDENT_URL + "/student";
const GET_STUDENTS_URL = BASE_STUDENT_URL + "/students";
const CREATE_STUDENT_URL = BASE_STUDENT_URL + "/student";
const UPDATE_STUDENT_URL = BASE_STUDENT_URL + "/student";
const DELETE_STUDENT_URL = BASE_STUDENT_URL + "/student";

type GetStudentsParams = { name: string; classroom: string };
type Student = {
  id: number;
  name: string;
  classroom: string;
  address: string;
  club: string;
  sex: string;
  height: number;
  weight: number;
  age: number;
  tel: string;
  email: string;
};
type Students = Student[];

const state = {
  student: {},
  students: []
};

const getters = {
  student: (state: { student: Student }) => state.student,
  students: (state: { students: Students }) => state.students
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
  async getStudents({ commit }: any, params: GetStudentsParams) {
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
  async createStudent({ commit }: any, params: { student: Student }) {
    try {
      const res = await axios.post(CREATE_STUDENT_URL, params.student);
      console.log(res);
      commit("setStudent", { student: res.data });
    } catch (error) {
      console.error(error);
    }
  },
  async updateStudent({ commit }: any, params: { student: Student }) {
    try {
      const res = await axios.put(
        UPDATE_STUDENT_URL + "/" + params.student.id,
        params.student
      );
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
  setStudent(state: { student: Student }, payload: { student: Student }) {
    state.student = payload.student;
  },
  setStudents(state: { students: Students }, payload: { students: Students }) {
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

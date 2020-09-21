<template>
  <div class="students">
    <h1>生徒管理</h1>

    <v-card class="mb-5">
      <v-container fluid>
        <v-form>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field v-model="name" label="氏名"></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field v-model="classroom" label="クラス"></v-text-field>
            </v-col>
          </v-row>
          <v-btn @click="search" class="mr-4" color="primary">検索</v-btn>
          <v-btn @click="clear">clear</v-btn>
        </v-form>
      </v-container>
    </v-card>

    <v-card>
      <v-container fluid>
        <div class="mb-4">
          <!-- <v-btn @click="toNew" color="success">新規作成</v-btn> -->
          <RegisterStudent />
        </div>
        <v-data-table
          :headers="headers"
          :items="students"
          @click:row="toShow"
        ></v-data-table>
      </v-container>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { createNamespacedHelpers } from "vuex";
import RegisterStudent from "@/components/RegisterStudent.vue";
const { mapGetters, mapActions } = createNamespacedHelpers("student");
export default Vue.extend({
  components: { RegisterStudent },
  data() {
    return {
      headers: [
        {
          text: "氏名",
          align: "start",
          value: "name"
        },
        { text: "クラス", value: "classroom" }
      ],
      name: "",
      classroom: ""
    };
  },
  computed: {
    ...mapGetters(["students"])
  },
  created() {
    this.getStudents();
  },
  methods: {
    ...mapActions(["getStudents"]),
    search() {
      this.getStudents({
        name: this.name,
        classroom: this.classroom
      });
    },
    clear() {
      this.name = "";
      this.classroom = "";
    },
    toNew() {
      this.$router.push({ name: "Student_new" });
    },
    toShow(payload: { id: any }) {
      this.$router.push({ name: "Student_show", params: { id: payload.id } });
    }
  }
});
</script>

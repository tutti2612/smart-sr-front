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
          <v-btn class="mr-4" color="primary">検索</v-btn>
          <v-btn @click="clear">clear</v-btn>
        </v-form>
      </v-container>
    </v-card>

    <v-card>
      <v-data-table
        :headers="headers"
        :items="desserts"
        @click:row="show"
      ></v-data-table>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
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
      desserts: [
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
      ],
      name: "",
      classroom: ""
    };
  },
  methods: {
    clear() {
      this.name = "";
      this.classroom = "";
    },
    show(payload: { id: any }) {
      this.$router.push({ name: "Student", params: { id: payload.id } });
    }
  }
});
</script>

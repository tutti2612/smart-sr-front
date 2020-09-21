<template>
  <div>
    <h1>生徒情報 新規作成</h1>

    <v-col cols="12" sm="6">
      <v-form class="mb-4">
        <v-text-field
          v-model="state.name"
          :rules="state.nameRules"
          label="氏名"
          required
        ></v-text-field>
        <v-text-field v-model="state.classroom" label="クラス"></v-text-field>
        <v-text-field v-model="state.address" label="住所"></v-text-field>
        <v-text-field v-model="state.club" label="部活動"></v-text-field>
        <v-select
          :items="state.items"
          v-model="state.sex"
          label="性別"
        ></v-select>
        <v-text-field
          v-model="state.height"
          label="身長"
          suffix="cm"
        ></v-text-field>
        <v-text-field
          v-model="state.weight"
          label="体重"
          suffix="kg"
        ></v-text-field>
        <v-text-field
          v-model="state.age"
          label="年齢"
          suffix="歳"
        ></v-text-field>
        <v-text-field v-model="state.tel" label="Tel"></v-text-field>
        <v-text-field v-model="state.email" label="Email"></v-text-field>
      </v-form>
    </v-col>
    <v-btn @click="submit">submit</v-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "@vue/composition-api";
export default defineComponent({
  setup() {
    const state = reactive({
      name: "",
      classroom: "",
      address: "",
      club: "",
      sex: "",
      height: null,
      weight: null,
      age: null,
      tel: "",
      email: "",
      nameRules: [(v: any) => !!v || "Name is required"],
      items: ["男", "女", "その他"]
    });

    function submit() {
      console.log("submit");
    }

    return {
      state,
      submit
    };
  }
});
</script>

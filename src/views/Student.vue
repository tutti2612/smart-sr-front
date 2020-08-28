<template>
  <div>
    <h1>生徒詳細</h1>

    <v-card>
      <dl>
        <dt>氏名</dt>
        <dd>{{ state.student.name }}</dd>
        <dt>クラス</dt>
        <dd>{{ state.student.classroom }}</dd>
        <dt>住所</dt>
        <dd>{{ state.student.address }}</dd>
        <dt>部活動</dt>
        <dd>{{ state.student.club }}</dd>
        <dt>性別</dt>
        <dd>{{ state.student.sex }}</dd>
        <dd>身長</dd>
        <dt>{{ state.student.height }}</dt>
        <dd>体重</dd>
        <dt>6{{ state.student.weight }}</dt>
      </dl>
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const state = reactive({
      student: {
        name: "土屋浩平",
        classroom: "3年7組",
        address: "東京都大田区南雪谷1-10-15 エクセール雪谷102",
        club: "卓球部",
        sex: "男",
        height: "165cm",
        weight: "60kg"
      }
    });

    return {
      state
    };
  }
});
</script>

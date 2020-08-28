<template>
  <div>
    <h1>生徒詳細</h1>
    <v-simple-table>
      <template v-slot:default>
        <tbody>
          <tr>
            <th class="text-left">氏名</th>
            <td>{{ state.student.name }}</td>
          </tr>
          <tr>
            <th class="text-left">クラス</th>
            <td>{{ state.student.classroom }}</td>
          </tr>
          <tr>
            <th class="text-left">住所</th>
            <td>{{ state.student.address }}</td>
          </tr>
          <tr>
            <th class="text-left">部活動</th>
            <td>{{ state.student.club }}</td>
          </tr>
          <tr>
            <th class="text-left">性別</th>
            <td>{{ state.student.sex }}</td>
          </tr>
          <tr>
            <th class="text-left">身長</th>
            <td>{{ state.student.height }} cm</td>
          </tr>
          <tr>
            <th class="text-left">体重</th>
            <td>{{ state.student.weight }} kg</td>
          </tr>
          <tr>
            <th class="text-left">年齢</th>
            <td>{{ state.student.age }} 歳</td>
          </tr>
          <tr>
            <th class="text-left">Tel</th>
            <td>{{ state.student.tel }}</td>
          </tr>
          <tr>
            <th class="text-left">Mail</th>
            <td>{{ state.student.mail }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
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
        height: 165,
        weight: 60,
        age: 30,
        tel: "08065048680",
        mail: "doyahirohira@gmail.com"
      }
    });

    return {
      state
    };
  }
});
</script>

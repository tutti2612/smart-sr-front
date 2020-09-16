<template>
  <div>
    <h1>生徒詳細</h1>
    <v-simple-table>
      <template v-slot:default>
        <tbody>
          <tr>
            <th class="text-left">氏名</th>
            <td>{{ student.name }}</td>
          </tr>
          <tr>
            <th class="text-left">クラス</th>
            <td>{{ student.classroom }}</td>
          </tr>
          <tr>
            <th class="text-left">住所</th>
            <td>{{ student.address }}</td>
          </tr>
          <tr>
            <th class="text-left">部活動</th>
            <td>{{ student.club }}</td>
          </tr>
          <tr>
            <th class="text-left">性別</th>
            <td>{{ student.sex }}</td>
          </tr>
          <tr>
            <th class="text-left">身長</th>
            <td>{{ student.height }} cm</td>
          </tr>
          <tr>
            <th class="text-left">体重</th>
            <td>{{ student.weight }} kg</td>
          </tr>
          <tr>
            <th class="text-left">年齢</th>
            <td>{{ student.age }} 歳</td>
          </tr>
          <tr>
            <th class="text-left">Tel</th>
            <td>{{ student.tel }}</td>
          </tr>
          <tr>
            <th class="text-left">Mail</th>
            <td>{{ student.email }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("student");
export default Vue.extend({
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapGetters(["student"])
  },
  created() {
    this.getStudent(this.id);
  },
  methods: {
    ...mapActions(["getStudent"])
  }
});
</script>

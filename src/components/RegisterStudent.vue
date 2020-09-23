<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="success" v-bind="attrs" v-on="on">
        新規登録
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">新規登録</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="student.name"
                :rules="state.nameRules"
                label="氏名"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="student.classroom"
                label="クラス"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="student.address"
                label="住所"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="student.club"
                label="部活動"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="student.tel" label="Tel"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="student.email"
                label="Email"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="student.age"
                label="年齢"
                suffix="歳"
              ></v-text-field>
              <v-select
                :items="state.items"
                item-text="sex"
                item-value="value"
                v-model="student.sex"
                label="性別"
              ></v-select>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="student.height"
                label="身長"
                suffix="cm"
              ></v-text-field>
              <v-text-field
                v-model="student.weight"
                label="体重"
                suffix="kg"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">
          Cancel
        </v-btn>
        <v-btn color="blue darken-1" text @click="save">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "@vue/composition-api";
export default defineComponent({
  setup(props, { root }) {
    const dialog = ref(false);
    const student = reactive({
      name: "",
      classroom: "",
      address: "",
      club: "",
      sex: "0",
      height: null,
      weight: null,
      age: null,
      tel: "",
      email: ""
    });
    const state = reactive({
      nameRules: [(v: string) => !!v || "Name is required"],
      items: [
        { sex: "男", value: "1" },
        { sex: "女", value: "2" },
        { sex: "その他", value: "9" }
      ]
    });

    function save() {
      root.$store.dispatch("student/createStudent", student);
      dialog.value = false;
    }

    return {
      dialog,
      student,
      state,
      save
    };
  }
});
</script>

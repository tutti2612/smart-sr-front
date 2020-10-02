<template>
  <v-dialog v-model="state.dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn :color="color" v-bind="attrs" v-on="on" class="mr-4">
        <slot></slot>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline"><slot></slot></span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-form ref="form" v-model="state.valid" lazy-validation>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="student.name"
                  :rules="validationRules.name"
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
                <v-text-field
                  v-model="student.tel"
                  :rules="validationRules.tel"
                  label="Tel"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="student.email"
                  :rules="validationRules.email"
                  label="Email"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="student.age"
                  :rules="validationRules.age"
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
                  :rules="validationRules.height"
                  label="身長"
                  suffix="cm"
                ></v-text-field>
                <v-text-field
                  v-model="student.weight"
                  :rules="validationRules.weight"
                  label="体重"
                  suffix="kg"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-form>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="state.dialog = false">
          Cancel
        </v-btn>
        <v-btn
          :disabled="!state.valid"
          color="blue darken-1"
          text
          @click="save"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "@vue/composition-api";
export default defineComponent({
  props: {
    mode: String,
    color: String,
    student: {
      type: Object,
      default: function() {
        return {
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
        };
      }
    }
  },
  setup(props: any, context: any) {
    const form = ref();
    const validationRules = reactive({
      name: [(v: string) => !!v || "Name is required"],
      height: [(v: string) => /null|^\d*$/.test(v) || "height must be valid"],
      weight: [(v: string) => /null|^\d*$/.test(v) || "weight must be valid"],
      age: [(v: string) => /null|^\d*$/.test(v) || "age must be valid"],
      tel: [(v: string) => /^\d*$/.test(v) || "tel must be valid"],
      email: [(v: string) => /^$|(.+@.+\..+)/.test(v) || "E-mail must be valid"]
    });
    const state = reactive({
      dialog: false,
      valid: false,
      items: [
        { sex: "男", value: "1" },
        { sex: "女", value: "2" },
        { sex: "その他", value: "9" }
      ]
    });

    function save() {
      if (!form.value.validate()) return;

      // v-model.number はフォームを空にするとnullではなく""になってしまう。
      // バックエンドにはnullで送信したいのでここで代入する。
      props.student.height = props.student.height || null;
      props.student.weight = props.student.weight || null;
      props.student.age = props.student.age || null;

      if (props.mode === "create") {
        context.root.$store.dispatch("student/createStudent", {
          student: props.student
        });
      }
      if (props.mode === "update") {
        context.root.$store.dispatch("student/updateStudent", {
          student: props.student
        });
      }
      state.dialog = false;
    }

    return {
      form,
      validationRules,
      state,
      save
    };
  }
});
</script>

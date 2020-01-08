<template>
  <v-card>
    <v-card-title>Create category </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field v-model="form.title" label="Title"></v-text-field>
        <ColorInput v-model="form.color" />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn text>Save</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
/**
 * Vendors
 */
import { Component, Vue } from "vue-property-decorator";

/**
 * Components
 */
import ColorInput from "@/components/ColorInput/ColorInput.vue";

/**
 * Typings
 */
interface IForm {
  title: string;
  color: string;
}

/**
 * Expo
 */
@Component({ components: { ColorInput } })
class CreateCategory extends Vue {
  form: IForm = {
    title: "",
    color: "#1867c0"
  };
}
export default CreateCategory;
</script>

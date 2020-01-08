<template>
  <v-menu v-model="isMenuOpen" :close-on-content-click="false">
    <template v-slot:activator="{ on }">
      <button
        type="button"
        text
        class="color-input-preview"
        :style="{ backgroundColor: value }"
        @click="showMenu"
      ></button>
    </template>
    <v-card>
      <v-color-picker mode="hexa" @input="inputHandler" :value="value" />
      <v-btn @click="closeMenu" tile block>apply</v-btn>
    </v-card>
  </v-menu>
</template>

<script lang="ts">
/**
 * Vendors
 */
import { Component, Vue, Prop } from "vue-property-decorator";

/**
 * Expo
 */
@Component
class ColorInput extends Vue {
  @Prop(String) readonly value!: number;

  isMenuOpen: boolean = false;

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  showMenu(): void {
    this.isMenuOpen = true;
  }

  inputHandler(e: string): void {
    this.$emit("input", e);
  }
}
export default ColorInput;
</script>

<style>
.color-input-preview {
  padding: 0.8rem;
  border-radius: 0.25rem;
}
</style>

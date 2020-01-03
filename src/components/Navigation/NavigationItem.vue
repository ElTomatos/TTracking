<template functional>
  <v-list-item :to="props.to">
    <v-list-item-action>
      <v-icon>{{ props.icon }}</v-icon>
    </v-list-item-action>
    <v-list-item-content>
      <v-list-item-title>
        {{ props.title }}
      </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script lang="ts">
export default {
  name: "NavigationItem"
};
</script>

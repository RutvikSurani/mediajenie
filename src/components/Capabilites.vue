<template>
  <v-container class="pl-16">
    <v-card flat class="pl-16">
      <v-card-title class="font-weight-600 font-size-64 yellow--text pl-0">
        CAPABILITES
      </v-card-title>
      <SubMenue
        class="pt-12"
        heading="Strategy"
        :subHeading="strategySubMenu"
      />
      <SubMenue heading="Design" :subHeading="strategySubMenu" />
      <SubMenue heading="Marketing" :subHeading="strategySubMenu" />
      <SubMenue
        heading="Content Production"
        class="pb-12"
        :subHeading="strategySubMenu"
      />
    </v-card>
  </v-container>
</template>

<script>
import SubMenue from "./SubMenu.vue";
export default {
  name: "CapabiliesPage",
  components: {
    SubMenue,
  },
  data() {
    return {
      strategySubMenu: [
        "Experience Design",
        "Branding",
        "Communication",
        "Packaging",
        "Retail",
      ],
    };
  },
};
</script>

<style></style>

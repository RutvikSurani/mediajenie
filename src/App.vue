<template>
  <v-app>
    <!-- <HeaderToolbar /> -->
    <v-main>
      <router-view />
    </v-main>
    <vue-snotify />
  </v-app>
</template>
<script>
// import HeaderToolbar from "./components/HeaderToolbar.vue";

export default {
  name: "App",
  components: {
    // HeaderToolbar,
  },
  data() {
    return {};
  },
};
</script>

<style>
.full-width {
  width: 100% !important;
}
.font-size-48 {
  font-size: 48px !important;
}
.font-size-24 {
  font-size: 24px !important;
}
.font-size-64 {
  font-size: 64px !important;
}
.font-size-128 {
  font-size: 128px !important;
}
.font-weight-600{
  font-weight: 600 !important;
}
.font-weight-400 {
  font-weight : 400 !important
}
.heading {
  font-family: "Poppins";
  line-height: 72px;
}
.subHeading {
  font-family: "Poppins";
  line-height: 36px;
}
.height-80 {
  height: 80%;
}
</style>

<template>
  <v-container fluid>
    <HeaderToolbar />
    <v-divider></v-divider>
    <div class="text-center font-weight-600 font-size-24 pa-14">
      <div>MediaJenie is a 15+ Year old digital media agency.</div>
      <div>
        We bring brands and customers closer through digital media experiences.
      </div>
    </div>
    <v-divider></v-divider>
    <Capabilities />
    <WorkPage />
    <CaseStudy />
    <ContactUs />
  </v-container>
</template>
<script>
import HeaderToolbar from "./HeaderToolbar.vue";
import Capabilities from "./Capabilites.vue";
import WorkPage from "./WorkPage.vue";
import CaseStudy from "./CaseStudy.vue";
import ContactUs from "./ContactUs.vue";

export default {
  name: "HomePage",
  components: {
    HeaderToolbar,
    Capabilities,
    WorkPage,
    CaseStudy,
    ContactUs,
  },
};
</script>

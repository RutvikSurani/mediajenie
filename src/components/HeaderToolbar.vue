<template>
  <v-container fluid class="pa-0">
    <v-row class="pt-0">
      <v-card class="full-width">
        <v-img height="606px" src="/Rectangle 1.png">
          <v-app-bar flat color="rgba(0, 0, 0, 0)">
            <v-toolbar-title class="text-h6 white--text pa-6">
              <v-img src="/image 7.png" />
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn color="white" icon @click="drawer = !drawer">
              <v-icon x-large color="yellow">mdi-dots-vertical-circle</v-icon>
            </v-btn>
          </v-app-bar>
          <v-card-title
            class="white--text heading full-width justify-center font-weight-600 font-size-48 pt-16 mt-16"
          >
            Vaishnavi Estate
          </v-card-title>
          <v-card-title
            class="white--text subHeading full-width justify-center font-weight-600 font-size-24"
          >
            Content Production
          </v-card-title>
        </v-img>
      </v-card>
    </v-row>
    <v-row align="center" justify="center" class="pt-2">
      <v-col
        class="pa-6 pt-8 font-weight-600 text-center font-size-24"
        cols="2"
      >
        TRUSTED BY
      </v-col>
      <v-col class="pa-6" cols="2">
        <v-img src="/image 2.png" heigth="118px" width="118px" />
      </v-col>
      <v-col class="pa-6 justify-center" cols="2">
        <v-img src="/image 3.png" heigth="118px" width="118px" />
      </v-col>
      <v-col class="pa-6 justify-center" cols="2">
        <v-img src="/image 4.png" heigth="118px" width="118px" />
      </v-col>
      <v-col class="pa-6 justify-center" cols="2">
        <v-img src="/image 5.png" heigth="118px" width="118px" />
      </v-col>
      <v-col class="pa-6" cols="2">
        <v-img src="/image 6.png" heigth="118px" width="118px" />
      </v-col>
    </v-row>
    <v-navigation-drawer
      v-model="drawer"
      color="yellow"
      width="100%"
      right
      absolute
      bottom
      temporary
    >
      <v-list nav dense>
        <v-list-item-group v-model="selectedValue">
          <v-list-item class="py-6">
            <v-list-item-title class="font-size-24">
              <v-icon> mdi-close</v-icon></v-list-item-title
            >
          </v-list-item>

          <v-list-item class="py-6">
            <v-list-item-title class="font-size-24">About Us</v-list-item-title>
          </v-list-item>

          <v-list-item class="py-6 font-size-24">
            <v-list-item-title class="font-size-24"
              >What We Do</v-list-item-title
            >
          </v-list-item>

          <v-list-item class="py-6 font-size-24">
            <v-list-item-title class="font-size-24">Our Work</v-list-item-title>
          </v-list-item>

          <v-list-item class="py-6 font-size-24">
            <v-list-item-title class="font-size-24"
              >Resources</v-list-item-title
            >
          </v-list-item>
          <v-list-item class="py-6 font-size-24">
            <v-list-item-title class="font-size-24"
              >Contact Us</v-list-item-title
            >
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>
<script>
export default {
  name: "HeaderToolbar",
  data() {
    return {
      drawer: false,
      selectedValue: undefined,
    };
  },
  watch: {
    selectedValue() {
      this.drawer = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.visitedLink {
  text-decoration: none;
  color: inherit;
}
</style>

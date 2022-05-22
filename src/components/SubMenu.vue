<template>
  <v-container>
    <div class="py-4 font-size-24 cursor-pointer" @click="show = !show">
      <v-icon color="black" class="pb-1"> mdi-plus </v-icon>
      <span>{{ heading }}</span>
    </div>
    <v-row v-if="show" class="pt-5 pl-5">
      <v-col v-for="(item, index) in subHeading" :key="index" >
        <v-row>
          <v-col >
            <span  class="cursor-pointer" @click="goToRoute()">{{ item }}</span>
          </v-col>
          <v-col v-if="index+1 !== subHeading.length" cols="6"  class=" text-center">       
            <v-divider vertical />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  props: {
    heading: {
      type: String,
      required: true,
    },
    subHeading: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      show: false,
    };
  },
  methods:{
    goToRoute(){
     console.log("WIP")
    }
  }
};
</script>
<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>

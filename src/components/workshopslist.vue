<template>
  <div>
    <h1>List of workshops</h1>
   
         <WorkshopCard v-for="workshop in workshops" :key="workshop.id" :workshop="workshop">  </WorkshopCard>
      
   
  </div>
</template>

<script>
import { getworkshops } from "@/services/workshops.js";
import workshopcard from "@/components/workshopscard.vue"
export default {
  name: "workshopslist",
  components:{
      WorkshopCard:workshopcard
  },
  data() {
    return {
      workshops: [],
    };
  },
  async created() {
    const data = await getworkshops();
    {
      console.log(data);
    }
  },
};
</script>

<style scoped>
</style>
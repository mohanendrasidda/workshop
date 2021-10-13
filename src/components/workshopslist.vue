<template>
  <div>
    <h1>List of workshops</h1>
     <button
                class="btn btn-primary btn-sm float-right"
                @click="isDescriptionShown = !isDescriptionShown"
            >
                Toggle descriptions
            </button>
    <hr />
    <AppSpinner v-if="status === 'Loading'" 
    size="medium" 
    theme="success"> 
    <template #body>Loading...</template>
    
    </AppSpinner>
    <div v-else-if="status === 'Loaded'">
      <div class="row">
        <div
          class="col-4 col-md-4"
          v-for="workshop in workshops"
          :key="workshop.id"
        >
          <workshopcard
           :workshop="workshop"
           :isShown="isDescriptionShown"> </workshopcard>
        </div>
      </div>
    </div>
    <AppAlert  v-else-if="status==='ERROR'" theme='danger'>
      <template #head>
        <h1>Error</h1>
      </template>
      <template #body>
        {{error.message}}
      </template>
    </AppAlert>
  </div>
</template>

<script>
import { getWorkshops } from "@/services/workshops.js";
import workshopcard from "@/components/workshopscard.vue";
//import Workshopscard from './workshopscard.vue';
export default {
  name: "workshopslist",
  components: {
    workshopcard,
  },
  data() {
    return {
      status: "Loading",
      workshops: [],
      error: null,
      isDescriptionShown:false
    };
  },
  async created() {
    try {
      const data = await getWorkshops();
      this.workshops = data;
      this.status = "Loaded";
    } catch (error) {
      this.status = "ERROR";
      this.error = error;
    }
  },
};
</script>

<style scoped>
</style>
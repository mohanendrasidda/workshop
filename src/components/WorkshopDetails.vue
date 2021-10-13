<template>
<div>
<AppAlert v-if="status==='ERROR'" theme='danger'>
    <template #head>
        <h1>ERROR</h1>
    </template>
    <template #body>{{error.message}}</template>
</AppAlert>
<AppSpinner v-else-if="status==='Loading'" theme='success'>
  <template #head>
    <h1>Wait</h1>
  </template>
  <template #body>
    <h4>Hie folks wait it's loading....</h4>
  </template>
</AppSpinner>

<div v-else>
 
     
            <div class="row">
                <div class="col-12">
                    <h1>{{workshop.name}}</h1>
                    <hr />
                </div>
            </div>
            <div class="row">
                <div class="col-4">
                    <img class="img-fluid" :src="workshop.imageUrl" :alt="workshop.name" />
                </div>
                <div class="col-8">
                    <div class="row">
                        <div class="col-3">
                            <p>
                                <small>
                                    {{workshop.startDate | date}}
                                    -
                                    {{workshop.endDate | date}}
                                </small>
                            </p>
                            <p>
                                <small class="text-muted">
                                    {{workshop.time}}
                                </small>
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12" v-html="workshop.description"></div>
                    </div>
                </div>
            </div>
        
  
  </div>
  <SessionList
  :sessions="workshop.sessions"/>
</div>
 

</template>

<script>
import SessionList from '@/components/SessionsList'
import  {getWorkshopsById}  from "@/services/workshops"
export default {
  name: "WorkshopDetails",
  components:{
    SessionList
  },
  props: {
    id: {
      type: [Number, String],
      default: 1
    }
  },
  data() { 
    return {
        status: "Loading",
        workshop:{
          sessions:[]
        },
        error: null,
    };
  },

  async created() {
    try {
      const data = await getWorkshopsById(this.id);
      console.log(data)
      this.workshop = data;
      this.status = "Loaded";
    } catch (error) {
      this.status = "ERROR"
      this.error = error
    }
  },
};
</script>

<style scoped>
</style>

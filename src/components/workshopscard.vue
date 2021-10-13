<template>
  <div>
    <router-link class="card text-reset text-decoration-none my-3 " style="width: 18rem" :to="`/workshops/${workshop.id}`">
      
        <div class="card-body">
          <div class="text-center">
            <img
              class="rounded w-50 d-block mx-auto"
              :src="workshop.imageUrl"
              :alt="workshop.name"
            />
            <h4 class="card-title">{{ workshop.name }}</h4>
            <div class="card-text">
              <div>
                {{ workshop.startDate | Date }} -- {{ workshop.endDate | Date}}
              </div>

              <div>{{ workshop.time }}</div>

              <div class="my-3" v-html="workshop.description"
              v-show="isShown"></div>
            </div>
          </div>
        </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "workshopcard",
  props: {
    workshop: {
      type: Object,
      required: true,
    },
    isShown:{
      type:Boolean,
      default:false
    }
  },
};
</script>

<style scoped>
.card {
  cursor: pointer;
}

.card:hover {
  box-shadow: 0px 0px 4px 0px goldenrod;
  background-color: #fcfcfc;
}

.card-img-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 150px;
  margin: 10px 0;
}
</style>

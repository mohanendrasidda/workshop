<template>

<div>
    {{workshop.name}}
</div>
    
</template>

<script>
export default{
    name:'workshopcard',
    props:{
        workshop:{
            type:Object,
            required:true
        }
    }
}
</script>

<style scoped>

</style>

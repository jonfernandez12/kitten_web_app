<template>
    <div>
        <h1>About us</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium incidunt tempora officia voluptas alias ipsa vero neque at beatae, reiciendis quaerat cumque odit ullam. Alias autem corrupti a vitae minus?</p>
    </div>
</template>
<script>
export default{
  head() {
    return {
        title: 'Posts | Home',
        meta: [
            {
            hid:'description', 
            name:"description",
            content:'Website about posts'
            }
        ],
        htmlAttrs:{
            lang:'en'
        }
    }
  }
}
</script>
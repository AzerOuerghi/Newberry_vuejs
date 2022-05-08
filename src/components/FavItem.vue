<template>
   <div>
    <div class="container">
  <div class="row">
    <div class="row col-6 mx-auto mt-7">
      <div class="toast bg-gradient-dark fade show p-2 mx-auto" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header border-0 bg-transparent">
          <i class="material-icons me-2 text-white"></i>
          <span class="me-auto font-weight-bold text-white"></span>
          <small class="text-white">{{ item.product.name }}</small>
          <i class="fas fa-times text-md ms-3 cursor-pointer text-white"  @click="removeFromFav(item)"></i>
        </div>
        <hr class="horizontal light m-0">
        <div class="toast-body text-white">
{{ item.product.description }}        </div>
      </div>
    </div>
</div>
    </div>
</div>
</template>

<script>
export default {
    name: 'FavItem',
    props: {
        initialItem: Object
    },
    data() {
        return {
            item: this.initialItem
        }
    },
    methods: {
        getItemTotal(item) {
            return item.quantity * item.product.price
        },
      
    
        updateFav() {
            localStorage.setItem('Fav', JSON.stringify(this.$store.state.Fav))
        },
        removeFromFav(item) {
            this.$emit('removeFromFav', item)

            this.updateFav()
        },
    },
}
</script>
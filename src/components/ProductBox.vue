<template>
         <div class=" mt-4 col-lg-6 col-12">
                <router-link v-bind:to="product.get_absolute_url" >

            <div class="card card-profile mt-lg-4 mt-5 z-index-2">
              <div class="row">
                <div class="col-lg-4 col-md-6 col-12 mt-n5">
                    <div class="p-3 pe-md-0">
                      <img class="w-100 border-radius-md shadow-lg" v-bind:src="product.get_thumbnail" alt="image">
                    </div>
                  
                </div>
                <div class="col-lg-8 col-md-6 col-12 my-auto">
                  <div class="card-body ps-lg-0">
                    <h5 class="mb-0"> {{ product.name }} </h5>
                    <div class="stats">
                </div>
                    <h6 class="text-info"> {{ product.description }} </h6>
                    <div class="rating mt-3">
              <i class="fas fa-star text-dark"></i>
              <i class="fas fa-star text-dark"></i>
              <i class="fas fa-star text-dark"></i>
              <i class="fas fa-star text-dark"></i>
              <i class="fas fa-star text-dark"></i>
            </div>
                  </div>
                  
                </div>
              </div>
            </div> </router-link>
          </div>   
</template>

<script>
export default {
    name: 'ProductBox',
    props: {
        product: Object
    }
}
</script>


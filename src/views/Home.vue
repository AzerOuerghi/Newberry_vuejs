<template>

<div class="index-page bg-gray-200">
  
<header class="header-2">
  <div class="page-header min-vh-75 relative" style="background-image: url('https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80');" loading="lazy">
    <span class="mask bg-gradient-primary opacity-4"></span>
    <div class="container">
      <div class="row">
        <div class="col-lg-7 text-center mx-auto">
          <h1 class="text-white pt-3 mt-n5">Newberry
          </h1>
          <p class="lead text-white mt-3">Newberry is a digital music and podcast service that gives you access to millions of songs and other content from creators all over the world.</p>
        </div>
      </div>
    </div>
  </div>
</header>

<div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">

<section class="pt-3 pb-4" id="count-stats">
  <div class="container">
    <div class="row">
      <div class="col-lg-9 mx-auto py-3">
        <div class="row">
          <div class="col-md-4 position-relative">
            <div class="p-3 text-center">
              <h1 class="text-gradient text-primary"><span id="state1" countTo="40000000">0</span>+</h1>
              <h5 class="mt-3">Number of Monthly Active Users
              </h5>
              <p class="text-sm font-weight-normal"></p>
            </div>
            <hr class="vertical dark">
          </div>
          <div class="col-md-4 position-relative">
            <div class="p-3 text-center">
              <h1 class="text-gradient text-primary"> <span id="state2" countTo="187000">0</span>+</h1>
              <h5 class="mt-3">Number of tracks
              </h5>
              <p class="text-sm font-weight-normal"></p>
            </div>
            <hr class="vertical dark">
          </div>
          <div class="col-md-4">
            <div class="p-3 text-center">
              <h1 class="text-gradient text-primary" id="state3" countTo="175000">0</h1>
              <h5 class="mt-3">Number of Subscribers
              </h5>
              <p class="text-sm font-weight-normal"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<div class="container mt-sm-5">
            <h1 >Latest Hits </h1>

  <div class="page-header py-6 py-md-5 my-sm-3 mb-3 border-radius-xl" style="background-image: url('https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2017/04/everything-you-need-to-know-about-spotify-hero.jpg?itok=vsn4J1yM');" loading="lazy">      
      
            <div class="row mt-4">
      <ProductBox 
        v-for="product in latestProducts"
        v-bind:key="product.id"
        v-bind:product="product" />
            </div>
    </div>
</div>
<section class="my-5 py-5">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-lg-4 ms-auto me-auto p-lg-4 mt-lg-0 mt-4">
        <div class="rotating-card-container">
          <div class="card card-rotate card-background card-background-mask-primary shadow-primary mt-md-0 mt-5">
            <div class="front front-background" style="background-image: url(https://images.unsplash.com/photo-1569683795645-b62e50fbf103?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80); background-size: cover;">
              <div class="card-body py-7 text-center">
                <i class="material-icons text-white text-4xl my-3">touch_app</i>
                <h3 class="text-white"> Your audience<br />is here to listen </h3>
                <p class="text-white opacity-8">From white-glove service for enterprise brands to self-serve solutions for small business, we can connect you to the people you care about with audio, video, and podcast ads.</p>
              </div>
            </div>
            <div class="back back-background" style="background-image: url(https://images.unsplash.com/photo-1498889444388-e67ea62c464b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1365&q=80); background-size: cover;">
              <div class="card-body pt-7 text-center">
                <h3 class="text-white">Discover More</h3>
                <p class="text-white opacity-8">You make products and services. We make it easy for millions of listeners to hear about them—wherever they’re listening. Start advertising on Newberry today.</p>
                <a href="" target="_blank" class="btn btn-white btn-sm w-50 mx-auto mt-3">Sign in </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 ms-auto">
        <div class="row justify-content-start">
          <div class="col-md-6">
            <div class="info">
              <i class="material-icons text-gradient text-primary text-3xl">content_copy</i>
              <h5 class="font-weight-bolder mt-3">About Us</h5>
              <p class="pe-5">You can also browse through the collections of friends, artists, and celebrities, or create a radio station and just sit back.Soundtrack your life with Newberry.  <br> Subscribe or listen for free.</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="info">
              <i class="material-icons text-gradient text-primary text-3xl">flip_to_front</i>
              <h5 class="font-weight-bolder mt-3">Get Ready</h5>
              <p class="pe-3">The world’s most popular front-end open source toolkit, featuring Sass variables and mixins.</p>
            </div>
          </div>
        </div>
        <div class="row justify-content-start mt-5">
          <div class="col-md-6 mt-3">
            <i class="material-icons text-gradient text-primary text-3xl">price_change</i>
            <h5 class="font-weight-bolder mt-3">Save Time & Money</h5>
            <p class="pe-5">Newberry Advertising helps businesses of all sizes reach listeners as they stream what they love</p>
          </div>
          <div class="col-md-6 mt-3">
            <div class="info">
              <i class="material-icons text-gradient text-primary text-3xl">devices</i>
              <h5 class="font-weight-bolder mt-3">Fully Responsive</h5>
              <p class="pe-3">Regardless of the screen size, the website content will naturally fit the given resolution.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- -------- START Content Presentation Docs ------- -->
<div class="container mt-sm-5">
  <div class="page-header py-6 py-md-5 my-sm-3 mb-3 border-radius-xl" style="background-image: url('https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2017/04/everything-you-need-to-know-about-spotify-hero.jpg?itok=vsn4J1yM');" loading="lazy">
    <span class="mask bg-gradient-dark"></span>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 ms-lg-5">
          <h4 class="text-white">It's easy
          </h4>
          <h1 class="text-white">With Newberry </h1>
          <p class="lead text-white opacity-8"> find the right music or podcast for every moment <br> on your phone, your computer, your tablet and more. <br> There are millions of tracks and episodes on Newberry. <br> So whether you’re behind the wheel, working out, partying or relaxing, the right music or podcast is always at your fingertips.</p>
          <a href="" class="text-white icon-move-right">
            Read docs
            <i class="fas fa-arrow-right text-sm ms-1"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

</div>

</div>
</template>

<script>
import axios from 'axios'

import ProductBox from '@/components/ProductBox'

export default {
  name: 'Home',
  data() {
    return {
      latestProducts: []
    }
  },
  components: {
    ProductBox
  },
  mounted() {
    this.getLatestProducts()

    document.title = 'Home | Newberry'
  },
  methods: {
    async getLatestProducts() {
      this.$store.commit('setIsLoading', true)

      await axios
        .get('/api/v1/latest-products/')
        .then(response => {
          this.latestProducts = response.data
        })
        .catch(error => {
          console.log(error)
        })

      this.$store.commit('setIsLoading', false)
    }
  }
}
</script>
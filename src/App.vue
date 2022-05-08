<template>
  <div id="wrapper">
  <div class="container position-sticky z-index-sticky top-0"><div class="row"><div class="col-12">
    <nav class="navbar navbar-expand-lg  blur border-radius-xl top-0 z-index-fixed shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
      <div class="container-fluid px-0">
                <router-link to="/" class="navbar-brand font-weight-bolder ms-sm-3"><strong>Newberry  </strong></router-link>

        <button class="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon mt-2">
            <span class="navbar-toggler-bar bar1"></span>
            <span class="navbar-toggler-bar bar2"></span>
            <span class="navbar-toggler-bar bar3"></span>
          </span>
        </button>
        <div class="collapse navbar-collapse pt-3 pb-2 py-lg-0 w-100" id="navigation">
          <ul class="navbar-nav navbar-nav-hover ms-auto">
            <li class="">
            <form method="get" action="/search">

                    <div class="input-group input-group-dynamic ">
                      <span class="input-group-text"><i class="fas fa-search" aria-hidden="true"></i></span>
                      <input class="form-control" placeholder="Search" type="text" name="query">
                    </div>
                  
                </form>
            </li>
            <li class="nav-item dropdown dropdown-hover mx-2 nav-item my-auto ms-3 ms-lg-0">
              <a class="nav-link ps-2 d-flex cursor-pointer align-items-center" id="dropdownMenuPages" data-bs-toggle="dropdown" aria-expanded="false">
                Pages
                <img src="./assets/img/down-arrow-dark.svg" alt="down-arrow" class="arrow ms-auto ms-md-2">
              </a>
              <div class="dropdown-menu dropdown-menu-animation ms-n3 dropdown-md p-3 border-radius-xl mt-0 mt-lg-3" aria-labelledby="dropdownMenuPages">
                <div class="d-none d-lg-block">
      <h6 class="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-1">
        Landing Pages
      </h6>
      <a href="./pages/about-us.html" class="dropdown-item border-radius-md">
        <span>About Us</span>
      </a>
      <a href="./pages/contact-us.html" class="dropdown-item border-radius-md">
        <span>Contact Us</span>
      </a>
      <a href="./pages/author.html" class="dropdown-item border-radius-md">
        <span>Author</span>
      </a>
      <h6 class="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-1 mt-3">
        Account
      </h6>
      <a href="./pages/sign-in.html" class="dropdown-item border-radius-md">
        <span>Sign In</span>
      </a>
    </div>
    

    
              </div>
            </li>
    
    
            <li class="nav-item my-auto ms-3 ms-lg-0">
              <a class="nav-link nav-link-icon me-2" href="https://github.com/creativetimofficial/material-kit" target="_blank">
                <i class="fa fa-github me-1"></i>
                <p class="d-inline text-sm z-index-1 font-weight-bold" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Star us on Github">Github</p>
              </a>
            </li>
            <li class="nav-item my-auto ms-3 ms-lg-0">

            <template v-if="$store.state.isAuthenticated">
                <router-link to="/my-account" class="btn btn-sm  bg-gradient-primary  mb-0 me-1 mt-2 mt-md-0">My account</router-link>
              </template>

              <template v-else>
                <router-link to="/log-in" class="btn btn-sm  bg-gradient-primary  mb-0 me-1 mt-2 mt-md-0">Log in</router-link>
              </template>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- End Navbar -->
    </div></div></div>
    

    <div class="is-loading-bar has-text-centered" v-bind:class="{'is-loading': $store.state.isLoading }">
      <div class="lds-dual-ring"></div>
    </div>

      <router-view/>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      showMobileMenu: false,
      Fav: {
        items: []
      }
    }
  },
  beforeCreate() {
    this.$store.commit('initializeStore')

    const token = this.$store.state.token

    if (token) {
        axios.defaults.headers.common['Authorization'] = "Token " + token
    } else {
        axios.defaults.headers.common['Authorization'] = ""
    }
  },
  mounted() {
    this.Fav = this.$store.state.Fav
  },
  computed: {
      FavTotalLength() {
          let totalLength = 0

          for (let i = 0; i < this.Fav.items.length; i++) {
              totalLength += this.Fav.items[i].quantity
          }

          return totalLength
      }
  }
}
</script>



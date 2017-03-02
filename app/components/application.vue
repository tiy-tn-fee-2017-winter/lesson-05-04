<template lang="html">
  <div class="app">
    <nav>
      <div class="nav-wrapper">
        <!-- <a href="#" class="brand-logo">Cute Animals</a> -->
        <ul id="nav-mobile" class="right">
          <li><button class="btn">Show All</button></li>
          <li><button class="btn">Show Pups</button></li>
          <li><button class="btn">Show Kittens</button></li>
        </ul>
      </div>
    </nav>

    <div class="container">
      <div class="section">
        <div class="row">
          <div class="col s3">
            <div class="card">
              <div class="card-content">
                <h2>Cats</h2>

                <ul class="collection">
                  <li class="collection-item" v-for="cat in cats" @click="updateSidebar(cat)">{{cat.name}}</li>
                </ul>
              </div>
            </div>
            <div class="card">
              <div class="card-content">
                <h2>Dogs</h2>

                <ul class="collection">
                  <li class="collection-item" v-for="dog in dogs" @click="updateSidebar(dog)">{{dog.name}}</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col s6">
            <div class="card" v-if="detail">
              <div class="card-content">
                <div class="card-image">
                  <img v-bind:src="detail.img">
                  <span class="card-title">{{detail.name}}</span>
                </div>
                <div class="card-content">
                  <h5>{{detail.cuteness}}/10 Would Pet Head</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store';
import { findAllCats, findAllDogs, changeFilter, changeDetail } from '../actions';

export default {
  data() {
    return {
      cats: this.$select('cats'),
      dogs: this.$select('dogs'),
      detail: this.$select('detail'),
    };
  },

  created() {
    store.dispatch(findAllCats());
    store.dispatch(findAllDogs());
  },

  methods: {
    updateSidebar(animal) {
      store.dispatch(changeDetail(animal));
    }
  },
};
</script>

<template>
   <div class="container">
      <h2 class="mt-4">List Of All Repositories</h2>
      <div class="table-container mt-5">
          <table class="table table-striped table-bordered table-hover is-fullwidth">
            <thead class="bg-primary text-white">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>URL</th>
              <th>Language</th>
              <th>Date Created</th>
              <th>View More</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="repo in repos" :key="repo.id">
            <td>{{repo.id}}</td>
            <td>{{repo.name}}</td>
            <td>{{repo.description}}</td>
            <td><a :href="repo.html_url" target="_blank">Github</a></td>
            <td>{{repo.language}}</td>
            <td>{{repo.created_at}}</td>
            <td>
            <router-link :to="{
              name: 'single-repo',
              params: {id : `${repo.id}`}
            }">
            <button type="button" class="btn btn-dark rounded" @click="selectRepo(repo)">View</button>
            </router-link>
            </td>
            </tr>
            </tbody>
          </table>
        <div class='pagination mr-2'>
          <button @click="prevHandler()" type="button" class="btn btn-primary mr-3">Prev </button>
          <button v-for="num of pages" @click="paginate(num)" type="button" class="btn btn-primary"> {{num}}</button>
          <button @click="nextHandler()" type="button" class="btn btn-primary">Next</button>
        </div>
      </div>
   </div>
</template>

<script>
  import axios from "axios";
  import store from "../store/Store"
export default {
  name: 'All Repo',
  data() {
      return {
        repos: null,
        pageNum: 1,
        
      };
  },
  computed:{
    pages: function(){
      return [this.pageNum, this.pageNum +1, this.pageNum+2, this.pageNum+3]
    }
  },
  mounted(){
    this.fetchRepo()
  },
  methods: {
    fetchRepo() {
    axios.get(`https://api.github.com/users/Tifem/repos?page=${this.pageNum}&per_page=10`).then((response) => {
      if(response.data.length == 0){
        this.pageNum = this.pageNum -1
        this.fetchRepo()
      }
      this.repos = response.data;
      console.log(response.data)
    })
  },
    paginate(num){
      this.pageNum = num
      this.fetchRepo()
      console.log(this.pageNum)
    },
    nextHandler(){
      this.pageNum = this.pageNum + 1
      this.fetchRepo()
    },
    prevHandler(){
      this.pageNum = this.pageNum - 1
      this.fetchRepo()
    },
    selectRepo(repo){
      store.commit('SET_REPO', repo)
    }
},
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .table-container{
    margin-bottom: 100px;
  }
</style>

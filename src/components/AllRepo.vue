<template>
   <div class="container">
      <div class="table-container mt-5">
          <table class="table is-bordered is-striped is-hoverable is-fullwidth">
            <thead class="thead-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Date Created</th>
              <th>URL</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="repo in repos" :key="repo.id">
            <td>{{repo.id}}</td>
            <td>{{repo.name}}</td>
            <td>{{repo.description}}</td>
            <td>{{repo.created_at}}</td>
            <td><a :href="repo.html_url" target="_blank">Github</a></td>
            </tr>
            </tbody>
          </table>
        <div class='pagination'>
          <button>Prev </button>
          <button v-for="num of pages" @click="paginate(num)"> {{num}}</button>
          <button>Next</button>
        </div>
      </div>
   </div>
</template>

<script>
  import axios from "axios";
export default {
  name: 'All Repo',
  data() {
      return {
        repos: null,
        pageNum: 1,
        pages: [1,2,3,4]
      };
  },
  mounted(){
    fetchRepo()
  },
  methods: {
    fetchRepo() {
    axios.get(`https://api.github.com/users/Tifem/repos?page=${this.pageNum}&per_page=10`).then((response) => {
      this.repos = response.data;
    })
  },
    paginate(num){
      this.pageNum = num
      console.log(this.pageNum)
    },
},
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .table-container{
    margin-bottom: 100px;
  }
</style>

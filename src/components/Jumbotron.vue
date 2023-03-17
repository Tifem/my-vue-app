<template>
  <div class="container mb-3">
    <div class="row">
      <div class="col-md-7">
      <img alt="" src="../assets/github.jpg" class="rounded" style="width: 320px;"/>
      </div>
      <div class="col-md-5 mt-3">
        <h1 class="text-dark">Github Repositories</h1>
        <p>This project is a Vue application that fetches user's repo from Github, showing the list of all Github repositories 
            and also a page which shows a single repository.
        </p>
      </div>
    </div>
  </div>

  <div className="row mt-3">
              <div className="col-md-4 mb-3">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title text-dark">Vue Js</h4>
                    <p className="card-text"></p>
                         <img alt="" src="../assets/vue.svg" class="rounded" style="width: 130px;"/>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title text-dark">GitHub API</h4>
                    <p className="card-text"></p>
                         <img alt="" src="../assets/git.png" class="rounded" style="width: 130px;"/>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title text-dark">Vue Router</h4>
                    <p className="card-text"></p>
                         <img alt="" src="../assets/router.png" class="rounded" style="width: 130px;"/>
                  </div>
                </div>
              </div>      
        </div>
</template>

<script>
export default {
  name: 'Jumbotron',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>

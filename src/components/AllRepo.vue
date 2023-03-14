<template>
  <div className="App container my-5">
        <h1 className="mb-3">List of all Repositories</h1>

        <div className="row">
          
              <div className="col-md-4 mb-3">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">{each.name}</h4>
                    <p className="card-text">{each.description}</p>
                    <Link
                      to=""
                      className="card-link btn btn-dark"
                    >
                      More
                    </Link>
                    <a href={each.html_url} className="card-link btn btn-primary">
                      View on Git
                    </a>
                  </div>
                </div>
              </div>
           
        </div>

        <div className="mt-5 d-flex justify-content-between">
          <button
            className="btn btn-primary"
            type="button"
            disabled=""
            aria-disabled=""
            onClick=""
          >
            <i className="bi-skip-backward-fill"></i>
          </button>

          <p>
            {page} of {pages}
          </p>

          <button
            className="btn btn-primary"
            type="button"
            disabled=""
            aria-disabled=""
            onClick=""
          >
            <i className="bi-skip-forward-fill"></i>
          </button>
        </div>

        <div className="mt-3 text-center">
            <button
              className="btn btn-dark mr-2"
              onClick=""
            >
              
            </button>
        
        </div>
      </div>
</template>

<script>
export default {
  name: 'All Repo',
  
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>

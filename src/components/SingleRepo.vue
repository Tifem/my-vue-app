<template>
  <div  v-for="repo in repos" :key="repo.id" className="container my-5">
        <div className="card w-100">
          <div className="card-body">
            <h5 className="card-title fw-bold">{repo.full_name}</h5>
            <p className="card-text">
              {repo.description}
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Owned by :{repo.owner.login} </li>
            <li className="list-group-item">fork :{repo.forks} </li>
            <li className="list-group-item">Created at : {repo.created_at} </li>
            <li className="list-group-item">Updated at :{repo.updated_at} </li>
            <li className="list-group-item">Pushed at : {repo.pushed_at} </li>
            <li className="list-group-item">Visiblity :{repo.visibility} </li>
            <li className="list-group-item">Watchers : {repo.watchers}</li>
            <li className="list-group-item">Default branch :{repo.default_branch} </li>
          </ul>
        </div>
      </div>
</template>

<script>
    import axios from "axios";
    export default {
        name: 'Single Repo',
        data(){
            return {
                repos: null,
            };
        },
        methods: {
            axios.get('https://api.github.com/users/Tifem/repos')
            this.response = response.data;
        }
    }
</script>
<template>
  <div>
    <button @click="getPosts">Load Posts</button>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Id</th>
          <th scope="col">UserId</th>
          <th scope="col">Title</th>
          <th scope="col">Body</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(p, index) in posts" :key="p.id">
          <th>{{ ++index }}</th>
          <td>{{ p.id }}</td>
          <td>{{ p.userId }}</td>
          <td>{{ p.title }}</td>
          <td>{{ p.body }}</td>
          <td style="display: flex" align="center">
            <a href="" class="btn btn-primary">Edit</a>
            <a href="" class="btn btn-danger">Delete</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PostListComponent",
  created() {
    this.getPosts();
  },
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    getPosts() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          console.log(response.data);
          this.posts = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
</style>

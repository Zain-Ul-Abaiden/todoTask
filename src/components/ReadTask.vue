<template>
    <div>
      <div class="mt-10">
        <h1 class="text-2xl text-black font-bold ml-48">Your Tasks</h1>
      </div>
      <ul
        class="flex border-2 p-4 m-4 justify-between bg-gray-100 ml-[275px]"
        v-for="(item, index) in items"
        :key="item._id"
      >
        <div>
          <li>
            <p class="text-xl">Title: {{ item.title }}</p>
            <p class="text-xl">Description: {{ item.description }}</p>
          </li>
        </div>
        <div>
            <button @click="editItem(index)" class="bg-black hover:bg-white hover:text-black mr-3 px-3">
              Edit
            </button>
          <button
            @click="deleteTask({'index':index,'id':item._id})"
            class="bg-red-600 hover:bg-white hover:text-black"
          >
            Delete
          </button>
        </div>
      </ul>
    </div>
    </template>
    <script>
    import { mapActions} from "vuex";
    export default {
      name: "ReadTask",
      data() {
        return {};
      },
      props:{
        items:{}
      },
      methods:{
         ...mapActions({getTask: "getTask"}),
         ...mapActions({deleteTask:"deleteTask"})
      },
      created(){
        this.getTask()
      }
      // methods: {
      //   deleteTask(id) {
      //     this.displayAllTask.splice(id, 1);
      //   },
      //   editItem(id) {
      //     this.$router.push({ path: `/edit/${id+1}` });
      //   },
      // },
      // computed: {
      //   ...mapGetters(["getTasks"]),
      // },
    };
    </script>
    <style scoped>
    button {
      border: 0;
      padding: 7px 20px;
      margin-top: 10px;
      color: white;
      border-radius: 10px;
    }
    </style>
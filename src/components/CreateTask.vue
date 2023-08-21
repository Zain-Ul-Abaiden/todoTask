<template>
    <div class="ml-[480px] max-w-md mt-10">
    <div class="mb-6">
      <label class="block mb-2 text-sm font-bold text-gray-900"
        >Enter Tittle</label
      >
      <input
        v-model="form.title"
        placeholder="Enter tittle "
        type="text"
        class="bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg block w-full p-2.5"
      />
    </div>
    <div class="mb-6">
      <label class="block mb-2 text-sm font-bold text-gray-900"
        >Enter Description</label
      >
      <textarea
        v-model="form.description"
        placeholder="Enter Description for Product "
        type="text"
        rows="5"
        class="bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg block w-full p-2.5"
      />
    </div>
    <div class="flex justify-between mx-4">
      <button @click="create(form)"
      type="button" class="bg-black py-2 px-4 rounded text-white hover:bg-gray-100 hover:text-black">Add To Tasks</button>
      <router-link to="/readtaskview">
        <button type="button" class="bg-black py-2 px-4 rounded text-white hover:bg-gray-100 hover:text-black">
          Read Task
        </button>
      </router-link>
    </div>
  </div>
</template>
<script>
import { mapActions,mapGetters } from 'vuex';
export default {
  name: "CreateTask",
  data() {
    return {
      form: {
        description: "",
        title: "",
      }
    };
  },
  methods: {
    ...mapActions({create:"createTask"})
  },
};
</script>
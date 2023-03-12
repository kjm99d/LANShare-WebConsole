<template>
  <div>
    <v-table fixed-header style="width: 100%;" height="600px">
      <thead>
        <tr>
          <th style="text-align: center;">Type</th>
          <th style="text-align: center;">FileName</th>
          <th style="text-align: center;">Size</th>
          <th style="text-align: center;">-</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index" v-on:click="appendPath(item)">
          <td>{{ item.is_dir ? "📂" : "📄" }}</td>
          <td style="text-align: left">{{ item.name }}</td>
          <td>{{ item.size }}</td>
          <td> <button @click="SendFile(item)">{{ item.is_dir == false ? "📤" : "" }} </button> </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  methods: {
    SendFile(item) {
      // 디렉토리인 경우 이벤트를 무시한다.
      if (item.is_dir) return -1;

      console.log(item)

      axios.post("http://localhost:5004/SendAll", {
        filepath: 'C:\\asd.txt',
        filename: '\\bb.txt'
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

    },
    appendPath(row) {
      if (row.is_dir)
        this.$emit('append-path', row.name);
    }
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>
  
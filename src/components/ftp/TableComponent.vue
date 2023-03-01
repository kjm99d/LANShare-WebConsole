<template>
    <div>
      <table style="margin: auto;">
        <thead>
          <tr>
            <th>Type</th>
            <th>FileName</th>
            <th>Size</th>
            <th>-</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items" :key="index" v-on:click="appendPath(item)">
            <td>{{ item.is_dir ? "📂" : "📄"  }}</td>
            <td style="text-align: left">{{ item.name }}</td>
            <td>{{ item.size }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    methods : {
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
  
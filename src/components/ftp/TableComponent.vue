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
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script>
export default {
  methods: {
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
  
<template>
  <div class="tableDeatils">
    <table>
      <thead>
        <tr>
          <th>{{ tableData[0].type }}</th>
          <th>{{ tableData[0].value }}</th>
          <th>{{ tableData[0].percent }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in tableData.slice(1)" :key="index">
          <td>{{ item.type }}</td>
          <td>{{ item.value }}</td>
          <td>{{ item.percent }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    tableData: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  mounted() {
    // console.log(this.tableData);
  }
};
</script>

<style lang="less" scoped>
.tableDeatils {
  padding: 0 20px 20px 20px;
  table {
    width: 100%;
    border-collapse: collapse;
    tr {
      height: 35px;
    }
    thead {
      th {
        font-size: 11px;
        color: #1a1a1a;
      }
    }
    tbody {
      td {
        text-align: center;
        font-size: 11px;
        color: #666666;
      }
    }
    tbody tr:nth-child(odd) {
      background-color: #f5f5f5;
    }
  }
}
</style>

<template>
  <div class="box">
    <ul>
      <v-touch
        tag="li"
        v-for="(item,index) in listNav"
        :key="index"
        @tap="getIndex(index)"
        :class="index==indx?'active':''"
      >{{item.CategoryName}}</v-touch>
    </ul>
  </div>
</template>

<script>
import Vuex from "vuex";

export default {
  data() {
    return {
    //   ind: 0
    };
  },
  created() {
    this.getData();
  },
  computed: {
    ...Vuex.mapState({
      listNav: state => state.type.arr,
      indx: state => state.type.ind
    })
  },
  methods: {
    ...Vuex.mapActions({
      getData: "type/getData",
      getIndex:"type/changeIndex"
    })
    
  }
};
</script>

<style scoped>
.box {
  position: fixed;
  left: 0;
  top: 0.83rem;
  width: 2rem;
  height: 11.5rem;
}
ul {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
}
li {
  width: 100%;
  height: 1.05rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background: #f4f4f4;
  color: #333;
  font-size: 0.26rem;
}
.active {
  width: 100%;
  height: 1.05rem;
  color: #11b57c;
  background: #fff;
  border-left: 0.1rem solid #11b57c;
}
</style>

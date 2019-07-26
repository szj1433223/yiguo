<template>
  <div class="bbb">
      <div>
        <input type="checkbox"  class="qx">
        <span>全选</span>
      </div>
    总数量:0 应付:0元
    <div class="js">去结算（0）</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bbb{
    width: 100%;
    height: 1rem;
    font-size: .3rem;
    color: #333;
    position: fixed;
    bottom: 1rem;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #ccc;
    /* z-index: 10 */
}

.qx{
	width: .3rem;
	height: .3rem;
	margin-left: .3rem
}
span{
	font-size: 40px
}
.js{
    width: 2.5rem;
    height: 100%;
    color: #fff;
    background: #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .32rem;
    font-weight: bold;
}
</style>

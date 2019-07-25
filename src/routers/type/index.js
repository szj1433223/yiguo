// import ProductList from '@/components/type/productList/index.vue'
export default {
    path:"/categories",
    component:()=>import("@/views/type/index.vue"),
    meta:{tabbarflag:true},
    name:"type",
    // children:[{
    //     path:"/categories/productList",
    //     component:ProductList,
    //     meta:{tabbarflag:false},
    //     name:"product",
    // }]
}
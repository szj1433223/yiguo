export default {
    path:"/categories",
    component:()=>import("@/views/type/index.vue"),
    meta:{tabbarflag:true},
    name:"type",
    children:[{
        path:"/productList",
        component:()=>import("@/components/type/productList/index.vue"),
        meta:{tabbarflag:false},
        name:"product",
    }]
}
import LoadingComponent from "./index.vue";
import Vue from "vue";

let instance;

const LoadingConstructor = Vue.extend(LoadingComponent);

instance = new LoadingConstructor({
    el: document.createElement("div")
});

instance.show = false;
const loading = {
    show(options = {}){
        instance.show = true;
        if(options){
            options.el.appendChild(instance.$el);
            instance.text = options.text;
        }
    },
    hide(){
        instance.show = false
    }
};

export default {
    install(){
        if(!Vue.$loading){
            Vue.$loading = loading;
        }
        Vue.mixin({
            created(){
                this.$loading = Vue.$loading;
            }
        });
    }
}
import Component from "vue-class-component";
import Vue from "vue/types/umd";

@Component
export class TagHelper extends Vue{
  createTag(){
    const name = window.prompt('请输入标签')
    if(!name){return window.alert('标签名不能为空')}
    this.$store.commit('createTag',name)
  }
}

export default TagHelper
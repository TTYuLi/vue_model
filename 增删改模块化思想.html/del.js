// var Del 
export default {
  template: `
        <div style="background-color:gold">
         ID:<input type="text" v-model="delId"/> 
         <button @click="deleteHero">删除</button>
          </div>
        `,
  data: function () {
    return {
      delId: ''
    }
  },
  props: ['heros'],
  methods: {
    deleteHero: function () {

    }
  },
  methods: {
    deleteHero: function () {
      var index = this.heros.findIndex(ele => ele.id == this.delId)
      if (index == -1) {
        alert('查无此人')
      } else {
        this.heros.splice(index, 1)
      }
      this.delId = ''
    }
  }
}
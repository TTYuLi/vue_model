// var update = 
export default{
  template: `<div style="background-color:yellowgreen">
          ID:<input type="text" v-model="updateId"/>
          Name:<input type="text" v-model="updateName"/>
          <button @click="updateHero">修改</button>
          </div>
        `,
  data: function () {
    return {
      updateId: '',
      updateName: ''
    }
  },
  props: ['heros'],
  methods: {
    updateHero: function () {
      var hero = this.heros.find(ele => ele.id == this.updateId)
      if (!hero) {
        alert('查无此人！')
      } else {
        hero.name = this.updateName
      }
      this.updateId = ''
      this.updateName = ''
    }
  }
}
// var add =

export default {
  template: `
        <div style="background-color:greenyellow">
          ID:<input type="text" v-model="addId"/>
          Name:<input type="text" v-model="addName"/>
          <button @click="addHero">添加hero</button>
        </div>
        `,
  data: function () {
    return {
      addId: '',
      addName: '',
    }
  },
  props: ['heros'],
  methods: {
    addHero: function () {
      this.heros.push({ id: this.addId, name: this.addName })
      this.addId = ''
      this.addName = ''
    }
  }
}
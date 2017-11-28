export default {
  template: `
          <div style="background-color:skyblue">
            <!--表里列表 -->  
            <ul>
              <li v-for="(hero,index) in heros" :key="index">{{hero.id}}    {{hero.name}}</li>
            </ul>
            
          </div>       
        `,
   props:['heros']
}
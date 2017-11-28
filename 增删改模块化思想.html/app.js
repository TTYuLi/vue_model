// var App
 export default {
  template: `
          <div>
              <list :heros="heros"></list> 
              <add :heros="heros"></add>
              <update :heros="heros"></update>
              <dele :heros="heros"></dele>
            </ul>
            
          </div>       
        `,
  data: function () {
    return {
      heros: [{ id: 1, name: '李白' }, { id: 2, name: '貂蝉' }, { id: 3, name: '西施' }, { id: 4, name: '昭君' }]
    }
  }
}
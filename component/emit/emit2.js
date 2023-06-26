export default{
    data(){
        return{
            childValue: 'abc'
        }
    },
    template: `
        <h2>Component Area</h2>
        <!-- v-bindは方方向バインドで「html->Vue」はない。そのため、v-modelが必要と思われる。 -->
        <input type="text" v-model="childValue">
        <input type="button" value="イベント" v-on:click="clickEvent">
    `,
    methods:{
        clickEvent(){
            alert("clickEvent start")

            this.$emit('child-click', this.childValue)

            alert("clickEvent end")
        }
    }
}
export default{
    props:{
    },
    template: `
        <h2>Component Area</h2>
        <input type="button" value="イベント" v-on:click="clickEvent">
    `,
    methods:{
        clickEvent(){
            this.$emit('child-click')
        }
    }
}
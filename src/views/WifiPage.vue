<template>
    <v-layout>
        <v-flex xs12>
            <v-container grid-list-xl>
                <div :class="getTheme"> {{this.roomName}}
                    <v-btn @click="getApList($store.state.ApList[id][roomName])" v-if="this.loading===false" fab flat color="#ab5153">
                        <v-icon>refresh</v-icon>
                    </v-btn>
                </div>
                <div class="text-xs-center" v-if="this.loading">
                    <v-progress-circular indeterminate size="100" color="#ab5153"></v-progress-circular>
                </div>
                <v-layout row wrap align-center class="mt-2" v-else>
                    <v-flex xs12 md3 v-for="name in names2">
                        <wifi-card
                        :title = name.name
                        :color = name.color
                        :description = name.state></wifi-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-flex>
    </v-layout>
</template>

<script>
import WifiCard from '../components/WifiCard'
import { setTimeout } from 'timers';
export default {
    data(){
        return{
            id: '',
            roomName: '',
            names: [],
            loading: false,
            color: '',
            state: '',
            names2: []
        }
    },
    created(){
        this.id = this.$route.params.id
        this.roomName = this.$route.params.roomName
        this.names = Object.keys(this.$store.state.ApList[this.id][this.roomName])
        this.getApList(this.$store.state.ApList[this.id][this.roomName])
    },
    components: {
        WifiCard
    },
    methods: {
        getApList(obj){
            var count = 0
            this.loading = true
            this.names2 = []
            for (var i in obj){
                var apiQuery = ".full=true&.or_filter=true"
                for(var j in obj[i]){
                    apiQuery = apiQuery + '&ethernetMac="' + obj[i][j] + '"' 
                }
                var payload = {apiQuery: apiQuery, name: i}
                this.$store.dispatch('getAPIdList', payload)
                .then(resp => {
                    count = count + 1
                    this.getAvailability(resp.message)
                    this.names2.push({
                        name: resp.message.name,
                        color: this.color,
                        state: this.state
                    })
                    if(count == this.names.length){
                        this.loading = false
                    }
                })
                .catch(err => {
                    console.log(err)
                }) 
            }
        },
        getAvailability(obj){
            if(obj.count < 50*obj.n){
                this.color = "#0C7C59"
                this.state = "Disponible"
            } else {
                this.color = "error"
                this.state = "No disponible"
            }
        }
    },
    computed: {
        getTheme(){
            if(this.$store.getters.theming === 'dark'){
                return 'title white--text'
            } else {
                return 'title black--text'
            }
        }
    }

}
</script>

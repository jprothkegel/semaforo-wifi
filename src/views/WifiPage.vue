<template>
    <v-layout>
        <v-flex xs12>
            <v-container grid-list-xl>
                <div class="title"> {{this.roomName}} </div>
                <v-layout row wrap align-center class="mt-2">
                    <v-flex xs12 md6 v-for="name in names">
                        <wifi-card
                        :title = name></wifi-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-flex>
    </v-layout>
</template>

<script>
import WifiCard from '../components/WifiCard'
export default {
    data(){
        return{
            id: '',
            roomName: '',
            names: []
        }
    },
    created(){
        this.id = this.$route.params.id
        this.roomName = this.$route.params.roomName
        this.names = Object.keys(this.$store.state.ApList[this.id][this.roomName])
        console.log(this.id)
        console.log(Object.keys(this.$store.state.ApList[this.id][this.roomName]))
    },
    components: {
        WifiCard
    }

}
</script>

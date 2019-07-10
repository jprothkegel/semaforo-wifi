<template>
    <v-card :color="getTheme"  class="rounded-card">
        <v-img :src=image aspect-ratio="1.5" class="rounded-card">
        </v-img>
        <v-card-actions>
            <v-card-title :class="textClass">{{this.title}} </v-card-title>
            <v-spacer></v-spacer>
            <v-btn icon v-if="buildings.length === 0" @click="goToRoom(title, roomId)">
                <v-icon :color="color">keyboard_arrow_right</v-icon>
            </v-btn>

            <v-menu dark offset-y v-else>
                <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on">
                        <v-icon :color="color" >keyboard_arrow_down</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-tile v-for="building in buildings" :key="building.name">
                        <v-list-tile-content>
                            <v-list-tile-title>{{building.name}} </v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-btn icon  @click="goToRoom(building.name, roomId)">
                                <v-icon color="">keyboard_arrow_right</v-icon>
                            </v-btn>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list>
            </v-menu>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    data(){
        return{
            color: "white",
            textClass: "white--text"
        }
    },
    props: {
        image: {
            type: String
        },
        title: {
            type: String
        },
        buildings: {
            type: Array
        },
        roomId: {
            type: String
        }
    },
    methods: {
        goToRoom(roomName, id){
            this.$router.push({name: 'wifi', params: {roomName: roomName, id: id}})
            // console.log(id)
            // console.log(roomName)
        }
    },
    computed:{
        getTheme(){
            if (this.$store.getters.theming === 'dark'){
                this.textClass = "white--text"
                this.color="white"
                return '#1d1d1d'
            } else {
                this.textClass = "black--text"
                this.color="black"
                return '#f0f0f0'
            }
        }
    }
}
</script>

<style scoped>

.rounded-card {
    border-radius: 15px;
}
</style>


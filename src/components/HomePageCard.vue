<template>
    <v-card flat class="transparent rounded-card">
        
        <v-img :src=image aspect-ratio="1.5" class="rounded-card">
            <v-container fill-height fluid pa-2 >
                <v-layout fill-height >
                    <v-flex xs12 align-end flexbox >
                        <span class="headline white--text back px-2" v-text="this.title"></span>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-img>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon v-if="buildings.length === 0" @click="goToRoom(title, roomId)">
                <v-icon >keyboard_arrow_right</v-icon>
            </v-btn>

            <v-menu dark offset-y v-else>
                <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on">
                        <v-icon >keyboard_arrow_down</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-tile v-for="building in buildings" :key="building.name">
                        <v-list-tile-content>
                            <v-list-tile-title>{{building.name}} </v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-btn icon @click="goToRoom(building.name, roomId)">
                                <v-icon>keyboard_arrow_right</v-icon>
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
    }
}
</script>

<style scoped>
.back{
    background-color: #1c8edb;
    border-radius: 50px;
}

.rounded-card {
    border-radius: 15px;
}
</style>


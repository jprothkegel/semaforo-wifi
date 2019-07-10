<template>
    <v-card class="elevation-5 rounded-card" :color="getTheme">
        <v-card-title :class="titleClass"> {{this.title}} </v-card-title>
        <v-container grid-list-xl >
            <v-layout row wrap align-center>
                <v-flex xs12>
                    <div class="text-xs-center">
                        <v-icon size="200px" :color="color">wifi_tethering</v-icon>
                        <div :class="subTitleClass"> {{this.description}}</div>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </v-card>
</template>

<script>
export default {
    data(){
        return{
            titleClass: 'headline white--text justify-center',
            subTitleClass: 'title mt-2 white--text'
        }
    },
    props: {
        title: {
            type: String
        },
        color: {
            type: String
        },
        description: {
            type: String
        }
    },
    computed: {
        getTheme(){
            if(this.$store.getters.theming === 'dark'){
                this.titleClass = 'headline white--text justify-center'
                this.subTitleClass = 'title mt-2 white--text'
                return '#1d1d1d'
            } else {
                this.titleClass = 'headline black--text justify-center'
                this.subTitleClass = 'title mt-2 black--text'
                return '#f0f0f0'
            }
        }
    }
}
</script>

<style scoped>
.rounded-card{
    border-radius: 20px;
}

</style>

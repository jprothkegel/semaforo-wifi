<template>
    <v-card>
        <v-card-title class="headline"> {{this.title}} </v-card-title>
        <v-container grid-list-xl >
            <v-layout row wrap align-center>
                <v-flex xs12 md6>
                    <div class="text-xs-center">
                        <v-icon size="100px" color="success">wifi</v-icon>
                        <div class="title mt-2"> 2.4 GHz</div>
                    </div>
                </v-flex>
                <v-flex xs12 md6>
                    <div class="text-xs-center">
                        <v-icon size="100px" class="icon" color="success">wifi</v-icon>
                        <div class="title mt-2"> 5 GHz</div>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </v-card>
</template>

<script>
export default {
    data(){
        return{}
    },
    props: {
        title: {
            type: String
        }
    }
}
</script>



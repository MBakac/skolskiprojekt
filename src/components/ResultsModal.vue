<template>
    <div class="container">
        <div class="notification">
            <div style="text-align: center;">
                <strong>Bravo!</strong>
                <br>
                Imaš {{right}} od {{count}} točnih odgovora!
                <br>
                <br>
                <b-field position="is-centered" label-position="">
                    <b-input
                        v-model="nickname" 
                        maxlength="3"
                        type="String"
                        validation-message="Nadimak smije sadržavati najviše 3 slova!"
                        v-on:input="capitaliseNickname()"
                        placeholder="Upiši nadimak"
                    >
                    </b-input>
                    <p class="control">
                        <button class="button is-primary" @click="scoreboard()">Unesi rezultat</button>
                    </p>
                </b-field>
                <b-button style="margin-right: 0.5em" @click="restart()">Ponovi</b-button>
                <b-button @click="scoreboard()">Tablica</b-button>
            </div>
        </div>
    </div>  
</template>

<script>
    import router from '../router'

    export default {
        name: "ResultsModal",
        props: ["right", "count"],
        methods: {
            restart() {
                router.push({ path: "/" })
                this.uploadScore()
                this.$emit('close')
            },
            scoreboard() {
                router.push({ path: "/scoreboard" })
                this.uploadScore()
                this.$emit('close')
            },
            capitaliseNickname() {
                this.nickname = this.nickname.toUpperCase()
            },
            uploadScore() {
                fetch("https://safe-dusk-39986.herokuapp.com/", {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                    },
                    mode: "cors",

                    body: JSON.stringify(
                        {
                            "nickname": this.nickname,
                            "points": this.right,
                            "compartment": "quiz"
                        }
                    )
                })
            }
        },
        data() {
            return {
                nickname: ""
            }
        }
    }
</script>
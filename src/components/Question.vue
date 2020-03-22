<template>
    <div>
        <section class="hero is-info" style="margin-top: 1rem; margin-bottom: 1rem;">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        {{question.question}}
                    </h1>
                    <h2 class="subtitle">
                        Pitanje broj {{number + 1}}
                    </h2>
                </div>
            </div>
        </section>
        <section class="hero is-success" style="margin-top: 1rem; margin-bottom: 1rem;" v-if="question.type === 'multiple-choice'">
            <div class="hero-body">
                <div class="container">
                    <nav class="level is-mobile">
                        <div class="level-item has-text-centered" v-for="answer in question.answers" v-bind:key="answer.letter">
                            <div>
                                <p class="letter">{{answer.letter}}</p>
                                <b-button @click="onClickMultipleChoice(answer.true)">{{answer.text}}</b-button>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </section>
        <section class="hero is-success" style="margin-top: 1rem; margin-bottom: 1rem;" v-if="question.type === 'text-field'">
            <div class="hero-body">
                <div class="container">
                    <div>
                        <b-field label="Tvoj odgovor" label-position="inside" grouped>
                            <b-input v-model="value"/>
                            <p class="control">
                                <b-button @click="onSubmitTextFile()">Odgovori</b-button>
                            </p>
                        </b-field>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "Question",
        props: ["question", "number"],
        methods: {
            onClickMultipleChoice (answer) {
                this.$emit("answered", answer)
            },
            onSubmitTextFile () {
                console.log(this.value)
                this.$emit("answered", this.value === this.question.answer ? true : false)
            },
        },
        data () {
            return {
                value: ""
            }
        }
    }
</script>

<style>
    .letter {
        font-size: 1.2em;
        margin-bottom: 0.25em;
    }
</style>
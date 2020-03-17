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
        <section class="hero is-success" style="margin-top: 1rem; margin-bottom: 1rem;">
            <div class="hero-body">
                <div class="container">
        <nav class="level is-mobile">
            <div class="level-item has-text-centered" v-for="answer in question.answers" v-bind:key="answer.letter">
                <div>
                    <p class="letter">{{answer.letter}}</p>
                    <b-button @click="onClick(answer.true)">{{answer.text}}</b-button>
                </div>
            </div>
        </nav>
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
            onClick (answer) {
                this.$emit("answered", answer)
            }
        }
    }
</script>

<style>
    .letter {
        font-size: 1.2em;
    }
</style>
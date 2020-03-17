<template>
	<div id="app">
		<section class="hero is-primary" style="margin-top: 1rem;">
			<div class="hero-body">
				<div class="container">
				<h1 class="title">
					Grčka književnost
				</h1>
				<h2 class="subtitle">
					Martin Bakač, 2020.
				</h2>
				</div>
			</div>
		</section>
		<Question v-bind:question="questions[questionNumber]" v-bind:number="questionNumber" v-on:answered="checkAnswer"/>
	</div>
</template>

<script>
	import Question from "./components/Question"
	import Modal from "./components/Modal"

	import questions from "./assets/questions.json"

	export default {
		name: 'App',
		components: {
			Question,
		},
		methods: {
			nextQuestion() {
				this.questionNumber++
				if (this.questionNumber === this.questionCount) {
					this.$buefy.modal.open({
						component: Modal,
						props: {
							"right": this.rightAnswers, 
							"count": this.questionCount
						}
					})
					this.questionNumber = 0
					this.rightAnswers = 0
				}
			},
			rightAnswer() {
				this.rightAnswers++
			},
			checkAnswer(answer) {
				if (answer) {
					this.rightAnswer()
					this.$buefy.toast.open({
						duration: 1000,
						message: "Točno!",
						position: "is-bottom",
						type: "is-success"
					})
				} else {
					this.$buefy.toast.open({
						duration: 1000,
						message: "Netočno!",
						position: "is-bottom",
						type: "is-danger"
					})
				}

				this.nextQuestion()
			}
		},
		data () {
			return {
				"questionNumber": 0,
				"rightAnswers": 0,
				"questions": questions,
				"questionCount": questions.length
			}
		}
	}
</script>
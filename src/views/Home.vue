<template>
	<div>
		<section class="hero is-info" style="margin-top: 1rem;">
			<div class="hero-body">
				<div class="container">
					<router-link to="/quiz"><b-button class="centered">Kreni!</b-button></router-link>
				</div>
			</div>	
		</section>
	</div>
</template>

<script>
	export default {
		name: "Home"
	}
</script>

<style>
	.centered {
		position: relative;
		top: 50%; 
		left: 50%;
	}
</style>
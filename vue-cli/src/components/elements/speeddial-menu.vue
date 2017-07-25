<template>
	<div class="button-collection">

		<div class="speeddial-menu">
			<slot></slot>
		</div>
		<div @click="fadeIn">
			click me
		</div>
	</div>
</template>
<script>
	export default{
		name: 'SpeeddialMenu',

		componentName: 'SpeeddialMenu',

		data() {
			return{
				items: [],
				show: false,
				active: null,
				index: String,

			}
		},
		methods:{
			fadeIn: function(el){
				this.show = !this.show;
			},
			enter: function(el){
				var delay = (this.index.length * 35) - (el.dataset.index * 35);
				console.log(this.$refs);

				setTimeout(function(){

					el.style.opacity = 1
					el.style.transform = 'scale(1)'

				}, delay);
				
			},
			leave: function(el){
				el.style.opacity = 0
				el.style.transform = 'scale(.3)' 
			}
		}
	}
</script>

<style lang="scss">
	.button-collection{
		z-index: 20;
		position: absolute;
		bottom: 20px;
		right: 20px;
		
		.speeddial-menu__item{
			border-radius: 50%;
			background: #000;
			color: #fff;
			width: 30px;
			height: 30px;
			display: block;
			text-align: center;
			margin-bottom: 15px;
			position: relative;
			transition-timing-function: ease-out;
		}
	}
	
	.fade-enter-active, .fade-leave-active {
	  	transition: all .18s ease-out;
	  	
	}
	.fade-enter-to, .fade-leave-to {
	  opacity: 0;
	}
</style>
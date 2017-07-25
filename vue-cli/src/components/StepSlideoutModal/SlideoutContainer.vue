<template>
	<div>
		<div class="slideout-container">
			<div class="title-panel" :class="classObject">
				<div class="panel-inner">
					<p :class="classObject">
						<slot name="title"></slot>
					</p>
				</div>
				<div :class="classObject" class="overlay"></div>
			</div>
			
			<div 
				class="content-panel" 
				:class="classObject"
			>
				<div class="panel-inner">
					<div class="content-panel-body" :class="classObject">
						<slot name="body"></slot>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
		  		error: null
			}
		},
		props:{
		    isActive: Boolean
		},
		computed: {
		  classObject: function () {
		    return {
		      active: this.isActive && !this.error
		    }
		  }
		},
		methods:{
			slideToggle: function(){
				this.isActive = !this.isActive
			}
		}
	}
</script>
<style lang="scss" scoped>
	.slideout-container{
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		overflow: hidden;
		margin: auto;

			.title-panel,
			.content-panel{
				position: absolute;
				height: inherit;
				transition: all .3s;
			}
			/*TITLE PANEL*/
			.title-panel{
				width: 100%;
				left: 0;
				top: 0;
				overflow: hidden;
				z-index: 11;

					p{
						font-size: 90px;
						opacity: 0;
						overflow: hidden;
						margin: 0;

						&.active{
							opacity: 1;
							transition: all .5s;
							transition-delay: .3s;
						}
					}

					.overlay{
						position: absolute;
						width: 100%;
						height: 100%;
						z-index: 0;
						opacity: 0;
						visibility: hidden;
						background: #3970a2;
						top: 0;
						right: 0;
						bottom: 0;
						left: 0;
						margin: auto;

						&.active{
							transition: all .5s;
							opacity: .9;
							visibility: visible;
						}
					}
			}

			/*CONTENT PANEL*/
			.content-panel{
				width: 0%;
				bottom: 0;
				right: 0;
				background: #fff;
				z-index: 11;
				transition-timing-function: cubic-bezier(0.42, 0, 0.65, 0.99);

				&.active{
					width: 70%;
					transition: all .5s;

				}

				.content-panel-body{
					
					position: relative;
					left: 100px;
					width: 775px;
					margin: 0 auto;
					opacity: 0;
					
					&.active{
						left: 0;
						opacity: 1;
						transition: all .5s;
						transition-delay: .28s;
					}
				}
			}

			.panel-inner{
				padding: 60px 40px;
				position: relative;
				z-index: 10;
			}
	}
	.toggle-btn{
		position: absolute;
		bottom: 40px;
		right: 40px;
		z-index: 12;
	}

</style>
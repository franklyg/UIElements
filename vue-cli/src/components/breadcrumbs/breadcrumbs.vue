<template>
	<div>
		<div class="breadcrumbs-container row" >
			<div class="power-btn">
				<span class="mid">
					<p><span>RETURN TO START</span> <i class="fa fa-power-off" aria-hidden="true"></i> >></p>
				</span>
				<span class="front"></span>
			</div>
			<ul class="breadcrumbs-list row">
				<slot></slot>

				<li 
					class="slide-state breadcrumb" 
					ref="slider"
					
				>
					<span class="back">
						<span class="top-arrow"></span>
						<span class="bottom-arrow"></span>
					</span>
					<span class="mid"></span>
					<span 
						class="front" 
					></span>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				'position': 0,
				'animating': false,
				'startTime': null,
				'startPosition': 0,
				'steps': [],
				'activeState': false
			}
		},
		props: {
			item: String
		},
		methods:{
		    isActive: function(item) {
		      return item.activeState;
		    },
		    zIndexState: function(item) {
		    	return item.zIndex;
		    },
		    toggle(item){
		    	// List of only breadcrumb sub-elements
		    	const crumbs = this.$slots.default.filter((el) => {
		    		if (el.componentOptions && el.componentOptions.tag == 'breadcrumb-element') {
		    			// Set clicked element to active
		    			this.$set(el.elm.__vue__, 'active', (el == item.$vnode));
		    			return true;
		    		}
		    	});

		    	this.$emit('clickStart', item.$vnode.componentInstance.header);

		    	this.position = crumbs.indexOf(item.$vnode) || 0;

		    }
		},
		watch: {
			position(newVal, oldVal) {
				var self = this;
				this.animating = true;
				this.startTime = +(new Date());
				
				if (oldVal != this.position) {
					this.startPosition = oldVal;
					
					(function animate() {
						var dist = Math.min((+(new Date()) - self.startTime) / 50, 1);
						var position = ((newVal - self.startPosition) * 20) * dist;
						var offset = (self.startPosition * 20) + position;
						var zIndex = Math.floor(4 - offset/20);
						
						var calc = function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 };

						var progress =  Math.abs(position) / (Math.abs(newVal - self.startPosition) * 20);
						var offset = (self.startPosition * 20) + (position * calc(progress));

						self.$refs.slider.style.left = offset + '%';
						self.$refs.slider.style.zIndex = zIndex;

						if (offset == (newVal * 20))
							self.animating = false;

						if (self.animating)
							window.requestAnimationFrame(animate);
					})()
				}
			}
		}
	}
</script>
<style lang="scss">
	@import url('https://fonts.googleapis.com/css?family=Poppins:600');
	.row:after{
		display: block;
		margin: 0 auto;
		clear: both;
	}

	.breadcrumbs-container{
		position: fixed;
		width: 100%;
		height: 50px;
		overflow: hidden;
		border: 1px solid #CCCCCC;
		border-radius: 0 0 5px 5px;
		background: #efefef;
		z-index: 100;
		cursor: pointer;
		top: 0;

		/***
		* POWER/RESET BUTTON
		***/
		.power-btn{
			width: 14%;
			left: -9.5%;
			height: inherit;
			position: absolute;
			transition: all .5s;
			z-index: 11;
			cursor: pointer;
			transition: all .5s;

			p{
				text-align: right;
				transition: all .5s;
				font-family: 'Poppins', Arial;
				span{
					visibility: hidden;
					opacity: 0;
					display: table-column;
				}
				i{
					font-size: 23px;
					vertical-align: middle;
					margin: 0 5px;
				}
			}

			&:hover{
				left: 0;
				p{	
					color: #fff;
					span{
						visibility: visible;
						opacity: 1;
						display: inline-block;
					}
				}
				.mid{
					background: #292929;;
				}
				
				.front{
					background: #292929;; 
					box-shadow: 2px -2px 0 0 #989898;
				}
			}
			.mid{
				width: 100%;
				position: absolute;
				height: inherit;
				z-index: 10;
				transition: all .5s;
				background: #efefef;
			}
			.front{
				width: 50px;
			    height: inherit;
			    position: absolute;
			    z-index: 4;
			    right: -15px;
			    top: -1px;
			    transition: all .5s;
			    background: #efefef; 

				border-right: 1px solid #CCCCCC;
			    border-top: 1px solid #CCCCCC;

				transform: rotate(45deg);
			}
		}
		/*POWER/RESET BUTTON END*/


		.breadcrumbs-list{
			height: inherit;
			margin: 0;
			width: 97%;
			float: right;
			position: relative;

			@for $i from 1 through 6{
				.step-#{$i}{
					z-index: 6 - $i;
				}
			}

			.breadcrumb{
				width: 20%;
				float: left;
				height: inherit;
				margin: 0;
				position: relative;
				transition: all .5s;
				cursor: inherit;

				span{
					cursor: pointer;
				}
				
				&.active{
					
					.mid{
						background: transparent;
					}
					p{
						color: #fff;
						transition: all .7s;
					}
				}
				  	
				.front{
					height: inherit;
				    width: 50px;
				    position: absolute;
				    border-right: 1px solid #CCCCCC;
				    border-top: 1px solid #CCCCCC;
				    right: -15px;
				    top: -1px;
				    z-index: 1;
				    transform: rotate(45deg);
				    opacity: .6;
				    box-shadow: 2px -2px 0 0 #989898;

					background: transparent;
				}
				.mid{
					height: inherit;
					display: block;
					position: absolute;
					z-index: 8;
					top: 0;
					width: 100%;

					/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffffff+0,e0e0e0+100 */
					background: #ffffff; /* Old browsers */
					background: -moz-linear-gradient(top, #ffffff 0%, #e0e0e0 100%); /* FF3.6-15 */
					background: -webkit-linear-gradient(top, #ffffff 0%,#e0e0e0 100%); /* Chrome10-25,Safari5.1-6 */
					background: linear-gradient(to bottom, #ffffff 0%,#e0e0e0 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
					filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#e0e0e0',GradientType=0 ); /* IE6-9 */

					background: transparent;
					
				}
				p{
					font-family: 'Poppins', Arial;
					text-align: center;
					position: relative;
					z-index: 10;
					font-size: 14px;
					color: #B3B3B3;
				}
			}
			.slide-state{
				width: 20%;
				left: 0%;
				position: absolute;		
				transition: all .5s;
				z-index: 4;
					
				.front{
					background: transparent;
					right: -15px;
					z-index: 10;
				}
				.front{
					box-shadow: 2px -2px 0 0 #bbbbbb;
					opacity: 1;
					&:after{
						content: '';
					    position: absolute;
					    width: 0;
					    height: 0;
					    right: -16px;
					    top: 5px;
					    border-top: 26px solid #efefef;
					    border-left: 26px solid transparent;
					    transform: rotate(45deg);
					    
					}
					&:before{
						content: '';
					    position: absolute;
					    width: 0;
					    height: 0;
					    right: 2px;
					    top: -16px;
					    border-top: 26px solid #efefef;
					    border-left: 26px solid transparent;
					    transform: rotate(-45deg);

					}
					
				}
				.mid{
					padding: 0 25px 0 0;
					box-sizing: initial;
					/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#00d6c4+0,57a8f4+25,726dee+50,dd69f0+75,ff5e9a+100 */
					background: #00d6c4; /* Old browsers */
					background: -moz-linear-gradient(left, #00d6c4 0%, #57a8f4 25%, #726dee 50%, #dd69f0 75%, #ff5e9a 100%); /* FF3.6-15 */
					background: -webkit-linear-gradient(left, #00d6c4 0%,#57a8f4 25%,#726dee 50%,#dd69f0 75%,#ff5e9a 100%); /* Chrome10-25,Safari5.1-6 */
					background: linear-gradient(to right, #00d6c4 0%,#57a8f4 25%,#726dee 50%,#dd69f0 75%,#ff5e9a 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
					filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00d6c4', endColorstr='#ff5e9a',GradientType=1 ); /* IE6-9 */

					background-attachment: fixed;
					cursor: pointer;
					
				}
				.back{
					width: 50px;
				    height: inherit;
				    position: absolute;
				    z-index: 10;
				    left: -35px;
				    top: -1px;
				    background: #efefef; 

					border-right: 1px solid #CCCCCC;
				    border-top: 1px solid #CCCCCC;

					transform: rotate(45deg);
				}
				
			}
		}

		
	}
</style>
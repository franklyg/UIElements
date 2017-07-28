<template>
	<div class="button-collection">

		<div class="speeddial-menu">
        <ul>
            <slot></slot>
        </ul>
		</div>

		<div class="speeddial-button button-main" @click="fadeIn">
			click me
		</div>

	</div>
</template>
<script>
	export default{
		name: 'SpeeddialMenu',

		componentName: 'SpeeddialMenu',
    data(){
      return{
        show: false
      }
    },
    props: {
      delay: {
        type: Number,
        default: 50
      }
    },
		methods:{
			fadeIn: function(el){
        this.show = !this.show
        this.$emit('clicked', this.show)
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
    
    .speeddial-button{
      border-radius: 50%;
      background: #57A8F4;
      color: #fff;
      display: block;
      text-align: center;
      margin-bottom: 15px;
      position: relative;
      transition-timing-function: ease-out;
    }

    .button-main{
      width: 80px;
      height: 80px;
      line-height: 80px;
    }
    
    .speeddial-menu__item{
      width: 60px;
      height: 60px;
      line-height: 60px;
    }
  }
  
  .fade-enter-active, .fade-leave-active {
      transition: all .18s ease-out;
      
  }
  .fade-enter-to, .fade-leave-to {
    opacity: 0;
  }
</style>
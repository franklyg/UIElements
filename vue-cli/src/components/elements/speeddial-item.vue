<template>
  <transition

    name="fade"
    mode="out-in" 
    tag="div"

    v-on:before-enter="leave"
    v-on:enter="enter"
    v-on:leave="leave"

    > 
      <li @click="deviceType" class="speeddial-button speeddial-menu__item" v-show="visible">
    		<slot></slot>
    	</li>
    </transition>

</template>

<script>
	export default{
		name: 'SpeeddialMenuItem',
		componentName: 'SpeeddialMenuItem',
    computed: {
      visible() {
        return this.$parent.show;
      },
      index() {
        return Math.floor(this.$parent.$slots.default.indexOf(this.$vnode) / 2);
      },
      count() {
        return Math.floor(this.$parent.$slots.default.length / 2);
      }
    },
    methods:{
      enter: function(el){
        const index = this.index, 
              count = this.count,
              delay = (count * this.$parent.delay) - (index * this.$parent.delay);

        setTimeout(function(){

          el.style.opacity = 1
          el.style.transform = 'scale(1)'

        }, delay);
      },
      leave: function(el){
        el.style.opacity = 0
        el.style.transform = 'scale(.3)' 
      },
      deviceType: function(el){
        return el.srcElement.innerText
      }
    }

	}
</script>


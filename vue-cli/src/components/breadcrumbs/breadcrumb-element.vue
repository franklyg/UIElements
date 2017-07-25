<template>
	<li class="breadcrumb" @click="setActive" ref="item" :class="{ 'active': active != undefined? active: isActive }" :style="{zIndex: indexOf()}">
		<span class="mid"></span>
		<span class="front"></span>
		<p><slot></slot></p>
	</li>
</template>

<script>
	export default{
		data() {
			return {
				active: null
			}
		},
		props:{
			item: String,
			isActive: Boolean,
			header: String
		},
		methods:{
			setActive(){
				return this.$parent.toggle(this)
			},
			indexOf() {
				const slots = this.$parent.$slots.default.filter((el) => {
		    		return el.componentOptions && el.componentOptions.tag == 'breadcrumb-element';
		    	});
		    	return slots.length - slots.indexOf(this.$vnode);
			}
		}
	}
</script>

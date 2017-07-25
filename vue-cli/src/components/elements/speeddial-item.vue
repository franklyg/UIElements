<template>
	<div class="speeddial-menu__item">
		<transition-group
				name="fade" 
				mode="out-in" 
				
				v-on:before-enter="leave"
				v-on:enter="enter"
				v-on:leave="leave"
			>	
			 <div

			 	

				:key="index"
				v-if="show" 
				:isActive="active"
			> 
				<slot></slot>
			 </div> 
		</transition-group>
	</div>
</template>
<script>
	export default{
		name: 'SpeeddialMenuItem',

		componentName: 'SpeeddialMenuItem',
		props:{
			isActive: Boolean
		}
	}
</script>

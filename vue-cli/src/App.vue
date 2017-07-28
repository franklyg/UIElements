<template>
  <div>
    <!-- <app-animation>
      
    </app-animation> -->
    <speeddial-menu @clicked="onClickChild" :delay="35" >
      <speeddial-menu-item>Hello</speeddial-menu-item>
      <speeddial-menu-item>Test</speeddial-menu-item>
      <speeddial-menu-item>More</speeddial-menu-item>
    </speeddial-menu>
    <breadcrumbs @clickStart="start">
      <breadcrumb-element :isActive="true" scope="props" header="Page Image" >Page Image</breadcrumb-element>
      <breadcrumb-element scope="props" header="Page Name">Page Name</breadcrumb-element>
      <breadcrumb-element scope="props" header="Page Price">Page Price</breadcrumb-element>
      <breadcrumb-element scope="props" header="Redirect Link">Redirect Link</breadcrumb-element>
      <breadcrumb-element scope="props" header="Preview">Preview</breadcrumb-element>
    </breadcrumbs>

    <slideout-container :isActive="active">

      <div slot="title">
	      <div v-show="activePanel == 'Page Image'">Page<br/> Image</div>
	      <div v-show="activePanel == 'Page Name'">Page<br /> Name</div>
	      <div v-show="activePanel == 'Page Price'">Page<br /> Price</div>
	      <div v-show="activePanel == 'Redirect Link'">Redirect<br /> Link</div>
	      <div v-show="activePanel == 'Preview'">Preview</div>  
      </div>

      <div slot="body">
        <div v-show="activePanel == 'Page Image'">
          <h1>Hello</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor lacinia vehicula. Pellentesque ullamcorper laoreet urna, vel mattis lacus ultricies sed. Praesent id metus pellentesque, pretium dui nec, pulvinar arcu. Praesent accumsan felis sapien, et facilisis turpis scelerisque vitae. Morbi nec vestibulum libero. Donec euismod vehicula lectus. Donec malesuada, libero quis hendrerit vestibulum, nisi augue eleifend magna, et dapibus risus metus nec velit. Donec elementum congue nisi in tempor. In at ligula placerat arcu tristique lacinia interdum at lorem. Fusce ipsum risus, venenatis vel sagittis id, fringilla ac tortor. Aliquam eleifend est purus, vestibulum interdum dui consequat ac. Quisque efficitur nibh quis nunc egestas, eu laoreet lacus tincidunt. In eget odio at quam sagittis bibendum. Sed sed elit sem. Donec tincidunt et ipsum quis mattis.</p>
        </div>
        <div v-show="activePanel == 'Page Name'">
          <h1>Jeez</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor lacinia vehicula. Pellentesque ullamcorper laoreet urna, vel mattis lacus ultricies sed. Praesent id metus pellentesque, pretium dui nec, pulvinar arcu. Praesent accumsan felis sapien, et facilisis turpis scelerisque vitae. Morbi nec vestibulum libero. Donec euismod vehicula lectus. Donec malesuada, libero quis hendrerit vestibulum, nisi augue eleifend magna, et dapibus risus metus nec velit. Donec elementum congue nisi in tempor. In at ligula placerat arcu tristique lacinia interdum at lorem. Fusce ipsum risus, venenatis vel sagittis id, fringilla ac tortor. Aliquam eleifend est purus, vestibulum interdum dui consequat ac. Quisque efficitur nibh quis nunc egestas, eu laoreet lacus tincidunt. In eget odio at quam sagittis bibendum. Sed sed elit sem. Donec tincidunt et ipsum quis mattis.</p>
        </div>
        <div v-show="activePanel == 'Page Price'">
          <h1>Hello</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor lacinia vehicula. Pellentesque ullamcorper laoreet urna, vel mattis lacus ultricies sed. Praesent id metus pellentesque, pretium dui nec, pulvinar arcu. Praesent accumsan felis sapien, et facilisis turpis scelerisque vitae. Morbi nec vestibulum libero. Donec euismod vehicula lectus. Donec malesuada, libero quis hendrerit vestibulum, nisi augue eleifend magna, et dapibus risus metus nec velit. Donec elementum congue nisi in tempor. In at ligula placerat arcu tristique lacinia interdum at lorem. Fusce ipsum risus, venenatis vel sagittis id, fringilla ac tortor. Aliquam eleifend est purus, vestibulum interdum dui consequat ac. Quisque efficitur nibh quis nunc egestas, eu laoreet lacus tincidunt. In eget odio at quam sagittis bibendum. Sed sed elit sem. Donec tincidunt et ipsum quis mattis.</p>
        </div>
	      <div v-show="activePanel == 'Redirect Link'">
	        <h1>Hello</h1>
	        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor lacinia vehicula. Pellentesque ullamcorper laoreet urna, vel mattis lacus ultricies sed. Praesent id metus pellentesque, pretium dui nec, pulvinar arcu. Praesent accumsan felis sapien, et facilisis turpis scelerisque vitae. Morbi nec vestibulum libero. Donec euismod vehicula lectus. Donec malesuada, libero quis hendrerit vestibulum, nisi augue eleifend magna, et dapibus risus metus nec velit. Donec elementum congue nisi in tempor. In at ligula placerat arcu tristique lacinia interdum at lorem. Fusce ipsum risus, venenatis vel sagittis id, fringilla ac tortor. Aliquam eleifend est purus, vestibulum interdum dui consequat ac. Quisque efficitur nibh quis nunc egestas, eu laoreet lacus tincidunt. In eget odio at quam sagittis bibendum. Sed sed elit sem. Donec tincidunt et ipsum quis mattis.</p>
	      </div>
			  <div v-show="activePanel == 'Preview'">
			    <h1>Hello</h1>
			    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor lacinia vehicula. Pellentesque ullamcorper laoreet urna, vel mattis lacus ultricies sed. Praesent id metus pellentesque, pretium dui nec, pulvinar arcu. Praesent accumsan felis sapien, et facilisis turpis scelerisque vitae. Morbi nec vestibulum libero. Donec euismod vehicula lectus. Donec malesuada, libero quis hendrerit vestibulum, nisi augue eleifend magna, et dapibus risus metus nec velit. Donec elementum congue nisi in tempor. In at ligula placerat arcu tristique lacinia interdum at lorem. Fusce ipsum risus, venenatis vel sagittis id, fringilla ac tortor. Aliquam eleifend est purus, vestibulum interdum dui consequat ac. Quisque efficitur nibh quis nunc egestas, eu laoreet lacus tincidunt. In eget odio at quam sagittis bibendum. Sed sed elit sem. Donec tincidunt et ipsum quis mattis.</p>
			  </div>
      </div>
    </slideout-container>
  </div>

</template>

<script>
import speeddialMenu from './components/elements/speeddial-menu.vue';
import speeddialItem from './components/elements/speeddial-item.vue';
import SlideoutContainer from './components/StepSlideoutModal/SlideoutContainer.vue';
import Breadcrumbs from './components/breadcrumbs/breadcrumbs.vue';
import BreadcrumbElement from './components/breadcrumbs/breadcrumb-element.vue';

export default {
  components:{
    SpeeddialMenu: speeddialMenu,
    SpeeddialMenuItem: speeddialItem,
    SlideoutContainer: SlideoutContainer,
    Breadcrumbs: Breadcrumbs,
    BreadcrumbElement: BreadcrumbElement
  },
  data() {
    return {
      activePanel: '',
      active: null,
      initSpeeddial: null,
      index: ''
    }
  },
  methods:{
    start: function(item) {
      this.active = !item.active;
      this.activePanel = item; 
    },
    onClickChild: function(value){
      this.initSpeeddial = !this.initSpeeddial
    }
  }
}
</script>

<style lang="scss">
@import url("//unpkg.com/element-ui@1.3.7/lib/theme-default/index.css");
*{
  box-sizing: border-box;
}
body{
  /*background: url('http://www.techpavan.com/wp-content/uploads/yahoo.png');*/
  background-size: cover;
  margin: 0;
  padding: 50px 0 0 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

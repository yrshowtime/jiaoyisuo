<template>
  <div>
    <svg @click="toggleClick" class="hamburger" :class="{'is-active':isActive}" width="18px" height="16px" viewBox="0 0 18 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <!-- Generator: Sketch 49 (51002) - http://www.bohemiancoding.com/sketch -->
        <title>Group</title>
        <desc>Created with Sketch.</desc>
        <defs></defs>
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="1-侧边栏" transform="translate(-281.000000, -24.000000)">
                <g id="Group-52" transform="translate(256.000000, 0.000000)">
                    <g id="Group" transform="translate(34.000000, 32.000000) scale(-1, 1) translate(-34.000000, -32.000000) translate(24.000000, 22.000000)">
                        <rect id="Rectangle-9" x="0" y="0" width="20" height="20"></rect>
                        <rect id="Combined-Shape" fill-opacity="0.65" fill="#000000" x="1.25" y="2.5" width="17.5" height="1.875" rx="0.9375"></rect>
                        <rect id="Rectangle-Copy" fill-opacity="0.65" fill="#000000" x="1.25" y="9.0625" width="11.25" height="1.875" rx="0.9375"></rect>
                        <path d="M15.2590699,6.94515846 L18.4849713,9.76436432 C18.6149268,9.87793604 18.6282084,10.0753538 18.5146367,10.2053093 C18.5053285,10.2159603 18.4953078,10.225967 18.4846439,10.2352604 L15.2589062,13.0464198 C15.1938495,13.1031153 15.09515,13.0963372 15.0384545,13.0312805 C15.0136595,13.0028288 15,12.9663642 15,12.9286244 L15,7.06281105 C15,6.97651655 15.0699555,6.90656105 15.15625,6.90656105 C15.1940647,6.90656105 15.2305963,6.92027461 15.2590699,6.94515846 Z" id="Rectangle-6" fill-opacity="0.65" fill="#000000"></path>
                        <rect id="Rectangle-Copy-2" fill-opacity="0.65" fill="#000000" x="1.25" y="15.625" width="17.5" height="1.875" rx="0.9375"></rect>
                    </g>
                </g>
            </g>
        </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'hamburger',
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    toggleClick: {
      type: Function,
      default: null
    }
  }
}
</script>

<style scoped>
.hamburger {
	display: inline-block;
	cursor: pointer;
	width: 20px;
	height: 20px;
	transform: rotate(180deg);
	transition: .38s;
	transform-origin: 50% 50%;
}
.hamburger.is-active {
	transform: rotate(0deg);
}
</style>

<template>
	<ul class="menu-container">
		<li
			v-for="opt in routes"
			:key="opt.title"
		>
			<button
				type="button"
				@click="currentRoute = opt"
			>{{opt.title}}</button>
		</li>
	</ul>
</template>

<script>
export default {
	name: 'menu-app',
	props: {
		routes: {
			default: () => [],
			type: Array,
		},
	},
};
</script>

<style scoped lang="scss">
.menu-container {
	@apply pl-0 border border-solid border-gray-300;

	li {
		@apply list-none ;

		button {
			@apply p-4 w-full bg-transparent
				text-primary text-left border-t-0 border-r-0 border-l-0
				border-solid border-b border-gray-300
				cursor-pointer;
		}
	}
	li:last-child {
		button {
			@apply border-b-0;
		}
	}
}

</style>

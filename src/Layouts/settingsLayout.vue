<template>
	<div class="layout-container">
		<aside>
			<ul>
				<li v-for="route in routes" :key="route.name">
					<router-link
						:class="[
							'route-button',
						]"
						tag="button"
						:to="{ name: route.name }"
					>{{route.title}}</router-link>
				</li>
			</ul>
		</aside>
		<main>
			<router-view name="profile"/>
			<router-view name="units"/>
			<router-view name="costCenter"/>
			<router-view name="globalSpec"/>
		</main>
	</div>
</template>
<script>

function data() {
	return {
		currentRoute: {},
		routes: [
			{ name: 'profile', title: 'Perfil de Usuario' },
		],
	};
}

export default {
	name: 'setting-layout',
	data,
};
</script>
<style lang="scss" scoped>
.layout-container {
	display: flex;
	height: 100%;
	padding: 0 1rem;

	aside {
		flex: 0 0 20%;
		border-right: 0.1rem solid blue;

		ul {
			padding: 0;

			li {

				.route-button {
					background-color: transparent;
					border: none;
					border-top: 0.1rem solid blue;
					height: 3rem;
					width: 100%;
				}
			}
		}
	}
	main {
		flex: 1 1 auto;
	}
}
</style>

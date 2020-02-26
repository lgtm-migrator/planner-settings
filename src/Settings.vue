<template>
	<div class="layout-container">
		<user-profile-layout
			:show="show"
		>
			<template v-slot:aside>
				<menu-component :routes="routes"/>
			</template>
			<template v-slot:main-content>
				<div data-cy="main-content-container">
					<h1>Contenido</h1>
				</div>
			</template>
		</user-profile-layout>
	</div>
</template>
<script>
import menuComponent from '@/components/menu/menu.vue';

function data() {
	return {
		currentRoute: {},
		routes: [
			{ name: 'profile', title: 'Perfil de Usuario' },
			{ name: 'units', title: 'Unidades' },
			{ name: 'constCenter', title: 'Centro de Costos' },
			{ name: 'globalSpec', title: 'Especificaciones Globales' },
		],
		show: false,
	};
}

export default {
	name: 'setting-layout',
	components: {
		menuComponent,
	},
	data,
};
</script>
<style lang="scss">
html, body {
	font-size: 62.5%;
	margin: 0;
}
.layout-container {
	margin: 0 auto;
	width: 87rem;

	.aside-container {
		flex-basis: 25% !important;
		@apply mr-4;
	}
}
@import 'tailwindcss/utilities';
</style>

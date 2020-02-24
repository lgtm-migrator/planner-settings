<template>
	<div class="layout-container">
		<user-profile-layout
			:show="show"
		>
			<template v-slot:aside>
				<ul class="menu-web" data-cy="menu-web">
					<li
						v-for="opt in routes"
						:key="opt.title"
						class="bg-blue-500"
					>
						<button
							type="button"
							@click="currentRoute = opt"
						>{{opt.title}}</button>
					</li>
				</ul>
			</template>
			<template v-slot:main-content>
				<div data-cy="main-content-container">
					<h1>Contenido</h1>
				</div>
			</template>
			<!-- <template v-slot:menu-movil>
				<div class="wrapper-menu-movil" data-cy="menu-movil">
					<button
						class="go-back"
						type="button"
						@click="show = false"
					>regresar</button>
					<ul class="movil">
						<li
						v-for="opt in menu"
						:key="opt.title"
						>
							<button type="button" @click="currentOption = opt">{{opt.title}}</button>
						</li>
					</ul>
				</div>
			</template> -->
		</user-profile-layout>
	</div>
</template>
<script>

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
	data,
};
</script>
<style lang="scss">
html, body {
	font-size: 62.5%;
	margin: 0;
}

@import './styles/index.scss';
</style>

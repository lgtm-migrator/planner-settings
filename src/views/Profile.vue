<template>
	<SettingLayout>
		Pantalla de Perfil de Usuario
		<ul>
			<li>Routerview para datos del usuario</li>
			<li>Routerview para cambio de contrasena</li>
			<li>Routerview para cambio de correo</li>
		</ul>
	</SettingLayout>
</template>
<script>
import SettingLayout from '@/Layouts/settingsLayout.vue';

export default {
	name: 'Profile',
	components: {
		SettingLayout,
	},
};
</script>
<style lang="scss" scoped>

</style>

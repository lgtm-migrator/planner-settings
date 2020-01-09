<template>
	<div>
		<h2>Pantalla de Perfil de Usuario</h2>
		<router-view name="email"></router-view>
		<router-view name="pass"></router-view>
		<router-view name="userData"></router-view>
	</div>
</template>
<script>

export default {
	name: 'Profile',
};
</script>
<style lang="scss" scoped>

</style>

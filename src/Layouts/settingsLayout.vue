<template>
	<div>
		<h1>Este es el layout para configuraciones</h1>
		<router-view name="profile"/>
		<router-view name="units"/>
		<router-view name="costCenter"/>
		<router-view name="globalSpec"/>
	</div>
</template>
<script>
export default {
	name: 'setting-layout',
};
</script>
<style lang="scss" scoped>

</style>

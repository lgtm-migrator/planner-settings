const profileRoute = {
	name: 'profile',
	path: 'mi-cuenta',
	components: {
		profile: () => import('@/views/Profile.vue'),
	},
};

export default profileRoute;

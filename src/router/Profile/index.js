const profileRoute = {
	path: 'mis-datos',
	name: 'profile',
	components: {
		profile: () => import(/* webpackChunkName: "profile" */ '@/views/Profile.vue'),
	},
	children: [
		{
			path: 'correo',
			name: 'email-update',
			components: {
				email: () => import('@/sections/Profile/emailChange.vue'),
			},
		},
	],
};

export default profileRoute;

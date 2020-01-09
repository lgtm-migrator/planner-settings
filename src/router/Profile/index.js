const profileRoute = {
	path: 'perfil',
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
		{
			path: 'contrasena',
			name: 'password-update',
			components: {
				pass: () => import('@/sections/Profile/passwordChange.vue'),
			},
		},
		{
			path: 'mis-datos',
			name: 'user-data-update',
			components: {
				userData: () => import('@/sections/Profile/userData.vue'),
			},
		},
	],
};

export default profileRoute;

import Vue from 'vue';
import VueRouter from 'vue-router';
import Profile from '@/router/Profile';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
		redirect: '/mi-cuenta',
		components: {
			account: () => import('@/App.vue'),
		},
		children: [
			{
				path: '/mi-cuenta',
				name: 'account',
				components: {
					account: () => import('@/Layouts/settingsLayout.vue'),
				},
				children: [
					Profile,
				],
			},
		],
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;

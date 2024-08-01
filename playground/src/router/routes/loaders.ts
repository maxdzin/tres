export const loaderRoutes = [
  {
    path: '/loaders/gltf',
    name: 'GLTF Loader',
    component: () => import('../../pages/loaders/gltf-loader/index.vue'),
  },
  {
    path: '/loaders/fbx',
    name: 'FBX Loader',
    component: () => import('../../pages/loaders/fbx-loader/index.vue'),
  },
]
import staticAdapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
export default {
  kit: {
    adapter: staticAdapter(),
  },
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

import { registerPlugin } from '@capacitor/core';

import type { CapgoInAppReviewPlugin } from './definitions';

const CapgoInAppReview = registerPlugin<CapgoInAppReviewPlugin>('CapgoInAppReview', {
  web: () => import('./web').then((m) => new m.CapgoInAppReviewWeb()),
});

export * from './definitions';
export { CapgoInAppReview };

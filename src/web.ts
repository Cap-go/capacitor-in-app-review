import { WebPlugin } from '@capacitor/core';

import type { CapgoInAppReviewPlugin } from './definitions';

export class CapgoInAppReviewWeb extends WebPlugin implements CapgoInAppReviewPlugin {
  async requestReview(): Promise<void> {
    console.warn('In-App Review is not available on web');
  }

  async getPluginVersion(): Promise<{ version: string }> {
    return { version: 'web' };
  }
}

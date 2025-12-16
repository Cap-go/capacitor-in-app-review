/**
 * Capacitor In-App Review Plugin interface for prompting users
 * to submit app store ratings and reviews without leaving the app.
 *
 * @since 1.0.0
 */
export interface CapgoInAppReviewPlugin {
  /**
   * Request an in-app review from the user.
   *
   * This method triggers the native in-app review dialog provided by the platform.
   * On iOS, it uses SKStoreReviewController. On Android, it uses the Play In-App Review API.
   *
   * **Important Notes:**
   * - The review dialog may not be displayed every time this method is called.
   *   Both Apple and Google have guidelines that limit how often the prompt can appear.
   * - There is no guarantee that the user will see the review prompt.
   * - The method resolves successfully even if the dialog was not shown.
   * - Do not call this in response to a user action like a button tap.
   *   Instead, call it at natural points in your app's user flow.
   *
   * @returns Promise that resolves when the review flow has finished
   * @throws Error if the review flow fails to start
   * @since 1.0.0
   * @example
   * ```typescript
   * import { CapgoInAppReview } from '@capgo/capacitor-in-app-review';
   *
   * // Request a review at an appropriate moment in your app
   * await CapgoInAppReview.requestReview();
   * ```
   */
  requestReview(): Promise<void>;

  /**
   * Get the native Capacitor plugin version.
   *
   * @returns Promise that resolves with the plugin version
   * @throws Error if getting the version fails
   * @since 1.0.0
   * @example
   * ```typescript
   * const { version } = await CapgoInAppReview.getPluginVersion();
   * console.log('Plugin version:', version);
   * ```
   */
  getPluginVersion(): Promise<{ version: string }>;
}

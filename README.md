# @capgo/capacitor-in-app-review

Prompt users to submit app store ratings and reviews without leaving your app.

This plugin uses the native in-app review APIs provided by Apple (SKStoreReviewController) and Google (Play In-App Review API) to show a review dialog within your app.

## Install

```bash
npm install @capgo/capacitor-in-app-review
npx cap sync
```

## Usage

```typescript
import { CapgoInAppReview } from '@capgo/capacitor-in-app-review';

// Request a review at an appropriate moment in your app
await CapgoInAppReview.requestReview();
```

## Important Notes

### Platform Guidelines

Both Apple and Google have strict guidelines about when and how often the review dialog can be shown:

**iOS:**
- The system may or may not show the review dialog based on App Store policy
- You should not call `requestReview()` in response to a button tap
- The system automatically limits the display of the prompt to 3 times within a 365-day period
- [Apple Guidelines](https://developer.apple.com/design/human-interface-guidelines/ratings-and-reviews)

**Android:**
- Google Play enforces a quota on how often a user can be shown the review dialog
- The API might not show the dialog if the quota has been reached
- [Google Play Guidelines](https://developer.android.com/guide/playcore/in-app-review)

### Testing

**iOS:**
- The review dialog will not be shown when testing via Xcode
- Use TestFlight or the App Store for testing

**Android:**
- Use internal app sharing or internal test track
- The dialog will not be shown in debug builds

## API

<docgen-index>

* [`requestReview()`](#requestreview)
* [`getPluginVersion()`](#getpluginversion)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

Capacitor In-App Review Plugin interface for prompting users
to submit app store ratings and reviews without leaving the app.

### requestReview()

```typescript
requestReview() => Promise<void>
```

Request an in-app review from the user.

This method triggers the native in-app review dialog provided by the platform.
On iOS, it uses SKStoreReviewController. On Android, it uses the Play In-App Review API.

**Important Notes:**
- The review dialog may not be displayed every time this method is called.
  Both Apple and Google have guidelines that limit how often the prompt can appear.
- There is no guarantee that the user will see the review prompt.
- The method resolves successfully even if the dialog was not shown.
- Do not call this in response to a user action like a button tap.
  Instead, call it at natural points in your app's user flow.

**Since:** 1.0.0

--------------------


### getPluginVersion()

```typescript
getPluginVersion() => Promise<{ version: string; }>
```

Get the native Capacitor plugin version.

**Returns:** <code>Promise&lt;{ version: string; }&gt;</code>

**Since:** 1.0.0

--------------------

</docgen-api>

## License

MIT

## Credits

This plugin is maintained by [Capgo](https://capgo.app).

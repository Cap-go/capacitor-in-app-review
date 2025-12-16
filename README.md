# @capgo/capacitor-in-app-review
 <a href="https://capgo.app/"><img src='https://raw.githubusercontent.com/Cap-go/capgo/main/assets/capgo_banner.png' alt='Capgo - Instant updates for capacitor'/></a>

<div align="center">
  <h2><a href="https://capgo.app/?ref=plugin_in_app_review"> ➡️ Get Instant updates for your App with Capgo</a></h2>
  <h2><a href="https://capgo.app/consulting/?ref=plugin_in_app_review"> Missing a feature? We'll build the plugin for you 💪</a></h2>
</div>

Prompt users to submit app store ratings and reviews without leaving your app.

## Why Capacitor In-App Review?

The simplest way to request **native app store reviews** on both iOS and Android:

- **iOS SKStoreReviewController** - Native App Store review dialog
- **Android Play In-App Review API** - Native Google Play review flow
- **No redirects** - Users stay in your app while reviewing
- **Platform compliant** - Follows Apple and Google guidelines automatically

Essential for improving your app's ratings and visibility on the stores.

## Documentation

For complete documentation, visit: https://capgo.app/docs/plugins/in-app-review/

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

## Platform Guidelines

Both Apple and Google have strict guidelines about when and how often the review dialog can be shown:

**iOS:**
- The system may or may not show the review dialog based on App Store policy
- You should not call `requestReview()` in response to a button tap
- The system automatically limits the display of the prompt to 3 times within a 365-day period

**Android:**
- Google Play enforces a quota on how often a user can be shown the review dialog
- The API might not show the dialog if the quota has been reached
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

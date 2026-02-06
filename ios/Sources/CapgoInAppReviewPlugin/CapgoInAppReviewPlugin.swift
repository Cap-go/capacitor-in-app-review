import Foundation
import Capacitor
import StoreKit

/**
 * Capacitor plugin for requesting in-app reviews using SKStoreReviewController.
 *
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(CapgoInAppReviewPlugin)
public class CapgoInAppReviewPlugin: CAPPlugin, CAPBridgedPlugin {
    private let pluginVersion: String = "8.1.1"
    public let identifier = "CapgoInAppReviewPlugin"
    public let jsName = "CapgoInAppReview"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "requestReview", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "getPluginVersion", returnType: CAPPluginReturnPromise)
    ]

    @objc func requestReview(_ call: CAPPluginCall) {
        DispatchQueue.main.async {
            if let windowScene = UIApplication.shared.connectedScenes
                .filter({ $0.activationState == .foregroundActive })
                .compactMap({ $0 as? UIWindowScene })
                .first {
                SKStoreReviewController.requestReview(in: windowScene)
            }
            // Always resolve successfully - Apple doesn't provide feedback
            // on whether the review dialog was actually shown
            call.resolve()
        }
    }

    @objc func getPluginVersion(_ call: CAPPluginCall) {
        call.resolve(["version": self.pluginVersion])
    }
}

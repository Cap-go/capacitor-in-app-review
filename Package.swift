// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "CapgoCapacitorInAppReview",
    platforms: [.iOS(.v14)],
    products: [
        .library(
            name: "CapgoCapacitorInAppReview",
            targets: ["CapgoInAppReviewPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", from: "8.0.0")
    ],
    targets: [
        .target(
            name: "CapgoInAppReviewPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/CapgoInAppReviewPlugin"),
        .testTarget(
            name: "CapgoInAppReviewPluginTests",
            dependencies: ["CapgoInAppReviewPlugin"],
            path: "ios/Tests/CapgoInAppReviewPluginTests")
    ]
)

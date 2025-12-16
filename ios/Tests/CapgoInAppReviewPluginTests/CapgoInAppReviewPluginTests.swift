import XCTest
@testable import CapgoInAppReviewPlugin

class CapgoInAppReviewPluginTests: XCTestCase {
    func testPluginLoads() throws {
        let plugin = CapgoInAppReviewPlugin()
        XCTAssertNotNil(plugin)
    }
}

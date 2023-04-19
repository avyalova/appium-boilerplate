## "spec" Reporter:

[emulator-5554 Android 13 #0-0] Running: emulator-5554 on Android 13 executing C:\VSCodeCourse\HW-25\appium-boilerplate\apps\Android-NativeDemoApp-0.4.0.apk
[emulator-5554 Android 13 #0-0] Session ID: 28512a69-70bb-4a3a-9624-7ec66587eeb9
[emulator-5554 Android 13 #0-0]
[emulator-5554 Android 13 #0-0] » \tests\specs\app.biometric.login.spec.ts
[emulator-5554 Android 13 #0-0] WebdriverIO and Appium, when interacting with a biometric button,
[emulator-5554 Android 13 #0-0] ? should be able to login with a matching touch/faceID/fingerprint
[emulator-5554 Android 13 #0-0] ✖ "before each" hook for WebdriverIO and Appium, when interacting with a biometric button,
[emulator-5554 Android 13 #0-0]
[emulator-5554 Android 13 #0-0] 1 failing (51.1s)
[emulator-5554 Android 13 #0-0]
[emulator-5554 Android 13 #0-0] 1) WebdriverIO and Appium, when interacting with a biometric button, "before each" hook for WebdriverIO and Appium, when interacting with a biometric button,
[emulator-5554 Android 13 #0-0] element ("android=new UiSelector().textContains("NEXT")") still not displayed after 45000ms
[emulator-5554 Android 13 #0-0] Error: element ("android=new UiSelector().textContains("NEXT")") still not displayed after 45000ms
[emulator-5554 Android 13 #0-0] at C:\VSCodeCourse\HW-25\appium-boilerplate\node_modules\webdriverio\build\commands\browser\waitUntil.js:66:23
[emulator-5554 Android 13 #0-0] at async Element.wrapCommandFn (C:\VSCodeCourse\HW-25\appium-boilerplate\node_modules\@wdio\utils\build\shim.js:137:29)
[emulator-5554 Android 13 #0-0] at async Element.elementErrorHandlerCallbackFn (C:\VSCodeCourse\HW-25\appium-boilerplate\node_modules\webdriverio\build\middlewares.js:24:32)
[emulator-5554 Android 13 #0-0] at async Element.wrapCommandFn (C:\VSCodeCourse\HW-25\appium-boilerplate\node_modules\@wdio\utils\build\shim.js:137:29)
[emulator-5554 Android 13 #0-0] at async Element.wrapCommandFn (C:\VSCodeCourse\HW-25\appium-boilerplate\node_modules\@wdio\utils\build\shim.js:137:29)
[emulator-5554 Android 13 #0-0] at async Element.elementErrorHandlerCallbackFn (C:\VSCodeCourse\HW-25\appium-boilerplate\node_modules\webdriverio\build\middlewares.js:24:32)
[emulator-5554 Android 13 #0-0] at async Element.wrapCommandFn (C:\VSCodeCourse\HW-25\appium-boilerplate\node_modules\@wdio\utils\build\shim.js:137:29)
[emulator-5554 Android 13 #0-0] at async AndroidSettings.waitAndTap (C:\VSCodeCourse\HW-25\appium-boilerplate\tests\screenobjects\AndroidSettings.ts:113:9)
[emulator-5554 Android 13 #0-0] at async AndroidSettings.fingerPrintWizardEightOrHigher (C:\VSCodeCourse\HW-25\appium-boilerplate\tests\screenobjects\AndroidSettings.ts:32:13)
[emulator-5554 Android 13 #0-0] at async AndroidSettings.enableBiometricLogin (C:\VSCodeCourse\HW-25\appium-boilerplate\tests\screenobjects\AndroidSettings.ts:137:13)

---

[emulator-5554 Android 13 #0-1] Running: emulator-5554 on Android 13 executing C:\VSCodeCourse\HW-25\appium-boilerplate\apps\Android-NativeDemoApp-0.4.0.apk
[emulator-5554 Android 13 #0-1] Session ID: 536a328d-04f2-474e-bf05-5fa0e524469e
[emulator-5554 Android 13 #0-1]
[emulator-5554 Android 13 #0-1] » \tests\specs\app.deep.link.navigation.spec.ts
[emulator-5554 Android 13 #0-1] WebdriverIO and Appium, when navigating by deep link
[emulator-5554 Android 13 #0-1] ✓ should be able to open the webview
[emulator-5554 Android 13 #0-1] ✓ should be able to open the login form screen
[emulator-5554 Android 13 #0-1] ✓ should be able to open the forms screen
[emulator-5554 Android 13 #0-1] ✓ should be able to open the swipe screen
[emulator-5554 Android 13 #0-1] ✓ should be able to open the drag and drop screen
[emulator-5554 Android 13 #0-1] ✓ should be able to open the home screen
[emulator-5554 Android 13 #0-1]
[emulator-5554 Android 13 #0-1] 6 passing (16.2s)

---

[emulator-5554 Android 13 #0-2] Running: emulator-5554 on Android 13 executing C:\VSCodeCourse\HW-25\appium-boilerplate\apps\Android-NativeDemoApp-0.4.0.apk
[emulator-5554 Android 13 #0-2] Session ID: 04b52e1f-e578-4d0f-ae74-f0fa5ace7115
[emulator-5554 Android 13 #0-2]
[emulator-5554 Android 13 #0-2] » \tests\specs\app.drag.and.drop.spec.ts
[emulator-5554 Android 13 #0-2] WebdriverIO and Appium, when using drag and drop
[emulator-5554 Android 13 #0-2] ✓ should be able to solve the puzzle by dragging the pieces into the puzzle
[emulator-5554 Android 13 #0-2]
[emulator-5554 Android 13 #0-2] 1 passing (19.3s)

---

[emulator-5554 Android 13 #0-3] Running: emulator-5554 on Android 13 executing C:\VSCodeCourse\HW-25\appium-boilerplate\apps\Android-NativeDemoApp-0.4.0.apk
[emulator-5554 Android 13 #0-3] Session ID: 4853d0e2-ffcc-4715-8f82-b479cf1b0d93
[emulator-5554 Android 13 #0-3]
[emulator-5554 Android 13 #0-3] » \tests\specs\app.forms.spec.ts
[emulator-5554 Android 13 #0-3] WebdriverIO and Appium, when interacting with form elements,
[emulator-5554 Android 13 #0-3] ✓ should be able type in the input and validate the text
[emulator-5554 Android 13 #0-3] ✓ should be able turn on and off the switch
[emulator-5554 Android 13 #0-3] ✓ should be able select a value from the select element
[emulator-5554 Android 13 #0-3] ✓ should be able to open the alert and close it with all 3 buttons
[emulator-5554 Android 13 #0-3] ✓ should be able to determine that the inactive button is inactive
[emulator-5554 Android 13 #0-3]
[emulator-5554 Android 13 #0-3] 5 passing (19s)

---

[emulator-5554 Android 13 #0-4] Running: emulator-5554 on Android 13 executing C:\VSCodeCourse\HW-25\appium-boilerplate\apps\Android-NativeDemoApp-0.4.0.apk
[emulator-5554 Android 13 #0-4] Session ID: d9a254c3-da8c-480a-80de-fd0cefa6fade
[emulator-5554 Android 13 #0-4]
[emulator-5554 Android 13 #0-4] » \tests\specs\app.login.spec.ts
[emulator-5554 Android 13 #0-4] WebdriverIO and Appium, when interacting with a login form,
[emulator-5554 Android 13 #0-4] ✓ should be able login successfully
[emulator-5554 Android 13 #0-4] ✓ should be able sign up successfully
[emulator-5554 Android 13 #0-4]
[emulator-5554 Android 13 #0-4] 2 passing (17.1s)

---

[emulator-5554 Android 13 #0-5] Running: emulator-5554 on Android 13 executing C:\VSCodeCourse\HW-25\appium-boilerplate\apps\Android-NativeDemoApp-0.4.0.apk
[emulator-5554 Android 13 #0-5] Session ID: 16163eac-0061-4d22-b7c6-771796a22daa
[emulator-5554 Android 13 #0-5]
[emulator-5554 Android 13 #0-5] » \tests\specs\app.swipe.spec.ts
[emulator-5554 Android 13 #0-5] WebdriverIO and Appium, when using swiping
[emulator-5554 Android 13 #0-5] ✓ should be able to swipe horizontal by swiping the carousel from left to right
[emulator-5554 Android 13 #0-5] ✓ should be able to swipe vertical by finding the surprise
[emulator-5554 Android 13 #0-5]
[emulator-5554 Android 13 #0-5] 2 passing (37.5s)

---

[emulator-5554 Android 13 #0-6] Running: emulator-5554 on Android 13 executing C:\VSCodeCourse\HW-25\appium-boilerplate\apps\Android-NativeDemoApp-0.4.0.apk
[emulator-5554 Android 13 #0-6] Session ID: 1f6eb10c-049a-4af7-a1be-1de3e3c54eb4
[emulator-5554 Android 13 #0-6]
[emulator-5554 Android 13 #0-6] » \tests\specs\app.tab.bar.navigation.spec.ts
[emulator-5554 Android 13 #0-6] WebdriverIO and Appium, when using navigation through the tab bar
[emulator-5554 Android 13 #0-6] ✓ should be able to open the webview
[emulator-5554 Android 13 #0-6] ✓ should be able to open the login form screen
[emulator-5554 Android 13 #0-6] ✓ should be able to open the forms screen
[emulator-5554 Android 13 #0-6] ✓ should be able to open the swipe screen
[emulator-5554 Android 13 #0-6] ✓ should be able to open the drag and drop screen
[emulator-5554 Android 13 #0-6] ✓ should be able to open the home screen
[emulator-5554 Android 13 #0-6]
[emulator-5554 Android 13 #0-6] 6 passing (17.8s)

---

[emulator-5554 Android 13 #0-7] Running: emulator-5554 on Android 13 executing C:\VSCodeCourse\HW-25\appium-boilerplate\apps\Android-NativeDemoApp-0.4.0.apk
[emulator-5554 Android 13 #0-7] Session ID: a572911d-7e89-4799-b57f-f94b5d622fd6
[emulator-5554 Android 13 #0-7]
[emulator-5554 Android 13 #0-7] » \tests\specs\app.webview.spec.ts
[emulator-5554 Android 13 #0-7] WebdriverIO and Appium, when interacting with a WebView,
[emulator-5554 Android 13 #0-7] ✓ should be able to switch between webview, native and webview
[emulator-5554 Android 13 #0-7]
[emulator-5554 Android 13 #0-7] 1 passing (33s)

---

[emulator-5554 Android 13 #0-8] Running: emulator-5554 on Android 13 executing C:\VSCodeCourse\HW-25\appium-boilerplate\apps\Android-NativeDemoApp-0.4.0.apk
[emulator-5554 Android 13 #0-8] Session ID: a8eebb16-43ef-451e-a26e-35f9275ca73d
[emulator-5554 Android 13 #0-8]
[emulator-5554 Android 13 #0-8] » \tests\specs\app.webview.xpath.spec.ts
[emulator-5554 Android 13 #0-8] WebdriverIO and Appium, when interacting with a webview through XPATH
[emulator-5554 Android 13 #0-8] ✓ should be able to verify that the WebView is shown by xpath
[emulator-5554 Android 13 #0-8] ✓ should be able to verify that the WebView is shown by switching to the WebView
[emulator-5554 Android 13 #0-8]
[emulator-5554 Android 13 #0-8] 2 passing (8.3s)
g
Spec Files: 8 passed, 1 failed, 9 total (100% completed) in 00:05:09

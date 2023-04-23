import TabBar from "../screenobjects/components/TabBar";
import LoginScreen from "../screenobjects/LoginScreen";
import NativeAlert from "../screenobjects/components/NativeAlert";

describe("WebdriverIO and Appium, positive test when interacting with a login form,", () => {
    beforeEach(async () => {
        await TabBar.waitForTabBarShown();
        await TabBar.openLogin();
        await LoginScreen.waitForIsShown(true);
    });

    it("should be able login successfully", async () => {
        // Always make sure you are on the right tab
        await LoginScreen.tapOnLoginContainerButton();
        // Submit the data
        await LoginScreen.submitLoginForm({
            username: "test@webdriver.io",
            password: "Test1234!",
        });
        // Wait for the alert and validate it
        await NativeAlert.waitForIsShown();
        await expect(await NativeAlert.text()).toEqual(
            "Success\nYou are logged in!"
        );

        // Close the alert
        await NativeAlert.topOnButtonWithText("OK");
        await NativeAlert.waitForIsShown(false);
    });

    it("should be able sign up successfully", async () => {
        // Always make sure you are on the right tab
        await LoginScreen.tapOnSignUpContainerButton();
        // Submit the data
        await LoginScreen.submitSignUpForm({
            username: "test@webdriver.io",
            password: "Test1234!",
        });
        // Wait for the alert and validate it
        await NativeAlert.waitForIsShown();
        await expect(await NativeAlert.text()).toEqual(
            "Signed Up!\nYou successfully signed up!"
        );

        // Close the alert
        await NativeAlert.topOnButtonWithText("OK");
        await NativeAlert.waitForIsShown(false);
    });
});

describe("WebdriverIO and Appium, negative test when interacting with a login form,", () => {
    beforeEach(async () => {
        // NativeAlert.topOnButtonWithText('OK');
        await TabBar.waitForTabBarShown();
        await TabBar.openLogin();
        await LoginScreen.waitForIsShown(true);
    });

    it("should not login successfully", async () => {
        // Always make sure you are on the right tab
        await LoginScreen.tapOnLoginContainerButton();
        // Submit the data
        await LoginScreen.submitLoginForm({
            username: "test@webdriver",
            password: "Test1234!",
        });
        // Wait for the alert and validate it
        await NativeAlert.waitForIsValidation();
        await expect(await NativeAlert.textValidation()).toEqual(
            "Please enter a valid email address"
        );
    });

    it("should not be able to sign up ", async () => {
        // Always make sure you are on the right tab
        await LoginScreen.tapOnSignUpContainerButton();
        // Submit the data
        await LoginScreen.submitSignUpForm({
            username: "test@webdriver",
            password: "Test1234!",
        });
        // Wait for the alert and validate it
        await NativeAlert.textValidation();
        await expect(await NativeAlert.textValidation()).toEqual(
            "Please enter a valid email address"
        );
    });

    afterEach(async () => {
        NativeAlert.topOnButtonWithText("OK");
        await NativeAlert.waitForIsShown(false);
    });
});

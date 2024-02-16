### How To Start This Test 
How to Work Test Project?


- Install Android Studio and Craete VM Mobile Phone
- Open BASH terminal 
- Paste this code
- `sudo git clone https://github.com/myagizmaktav/assessments-react-native.git && cd assessments-react-native && cd src && cd teknasyonTest && sudo npm i`
- Then open VM Mobile on android studio.
- Then Write This Code `npx expo start -c`
- Volla!


# React Native Assessment

This repository contains an assessment task which is designed to evaluate candidates in the job application process and to help us assess the approaches and abilities of participants.

In the task, you are expected to complete the project described below. While completing the task, please make sure that you are delivering the best work you can to assist us in an accurate evaluation.


## Requirements

### Technologies to be used:

- JavaScript and/or TypeScript
- Git


### Constraints and Conventions:

- Use of vector file formats for images
- Use of only functional components
- Applying atomic design principles
- Developing the project with frequent commits on version control system
- Use of "conventional commits" convention for commit messages
- Minimum 60% unit testing code coverage
- Writing a markdown documentation to describe how to run it


## How to Get Started?

Begin by creating a React Native project base.

Next, transfer the codebase to a git repository and share the repository address upon completion.


## Product Expectations

https://github.com/Teknasyon/assessments-react-native/assets/866558/0323671b-a327-4d3c-9d61-3efc2c289d50

- The project needs to be function as shown in the video below.

- Pick **just one screen** to implement.


## Engineering Expectations

- A miniapp should be created with React Native.

- This app should be interacting with native OS (i.e. iOS, Android, etc.)

- You may use a framework like Electrode Native or Expo

- Screen you've picked should be popped up when the first button is clicked

- A native storyboard should be added in the Xcode project as shown below, and a button should be placed.

  ![Screenshot of the project](./art/xcode.jpg)

- Sample Electrode code to be called when the button is clicked:
  ```swift
  // Function to be called
  openScreen(screenName: "LandingLatestScreen")

  // Function definition
  func openScreen(screenName: String) {
    let viewController = ElectrodeReactNative.sharedInstance().miniApp(withName: “YouTubeLandingMiniapp”, properties: [
        “initialScreen”: screenName
    ], overlay: true, sizeFlexibility: 300, delegate: nil)

    let screenSize: CGRect = UIScreen.main.bounds
    viewController.view.frame = CGRect(x: 0, y: 0, width: screenSize.width, height: screenSize.height)

    self.view.addSubview(viewController.view)
  }
  ```

- On the React Native side, it should be handled as in the `src/App.js` file.

- A `LandingLatestScreen.js` file should be created and suitable codes should be written in it, consistent with the interface.
  Figma: https://www.figma.com/file/rGR9aiS2bhtj574U2teCpH/RN-Assesment?type=design&node-id=0%3A1&mode=design&t=1wKM6el7p5Y7lyUU-1

- When the close button in the screen design is clicked, the React Native interface should be closed and returned to native.

- The process of closing the RN interface and returning to native can be done by creating an API. Sample Electrode code:
  ```javascript
  import { LandingApi } from “@youtube/landing-api”;

  export function handleCloseScreen() {
    console.log(“Closing screen”);

    LandingApi.requests()
      .closeScreen()
      .then((response) => {
        console.log(“closeScreen”, response);
      });

    return;
  }
  ```

- The Swift code to be called:
  ```swift
  // LandingApiRequestHandlerProvider.swift
  // ...
  public func registerCloseScreenRequestHandler() {
    _ = landingApi.requests.registerCloseScreenRequestHandler{ (data, completion) in
        let vc =  (UIApplication.shared.keyWindow?.rootViewController)!

        vc.view.subviews[vc.view.subviews.count - 1].removeFromSuperview()

        let resp = GenericResponse(isFinished: true)
        completion(resp, nil)
    }
  }
  ```


## Your Questions

You can send your questions regarding the assessment to [eser@teknasyon.com](mailto:eser@teknasyon.com).


## License

Licensed under [Apache 2.0](LICENSE).

# README for Star Wars Favorites Mobile Application

## Overview

The Star Wars Favorites Mobile Application is a React Native-based project for both iOS and Android platforms. It allows users to explore characters from the Star Wars universe, categorizing their favorites by gender, and viewing detailed information about each character.

## Features

- **Character Browsing**: Users can browse a paginated list of Star Wars characters.
- **Detailed Information**: On selecting a character, users can view detailed information on a dedicated screen.
- **Favorites**: Users can add characters to their favorites, categorizing them by male, female, or other genders.
- **Real-Time Statistics**: The app shows real-time updates on the total number of favorite characters based on gender.
- **Reset Functionality**: A reset button allows users to clear their favorites list and reset statistics.

## Technical Details

- **API Integration**: The app fetches data from the [Star Wars API (SWAPI)](https://swapi.dev/).
- **State Management**: Flexible state management to ensure smooth user experience.
- **UI/UX Design**: The app follows referenced styling, with options to customize according to user preferences and best UX/UI practices.

## Requirements

- **React Native Init/CLI**: Application must be developed using React Native Init/CLI (not Expo).
- **Cross-Platform Compatibility**: Must function seamlessly on both iOS and Android.
- **Code Quality**: Emphasis on clean, readable code. Usage of ESLint and Prettier is encouraged.

# Installation and Setup for Star Wars Favorites Mobile Application

## Prerequisites
Before you begin, ensure you have the following installed:
- Node.js (version 18 or later)
- Yarn (version 3.5.1 or later)
- React Native CLI (not Expo)
- Android Studio (for Android development)
- Xcode (for iOS development)

## Initial Setup
1. **Clone the Repository**: 
   Clone the `StarWarsFavoritesApp` repository to your local machine.
   ```bash
   git clone git@github.com:4qwerty/StarWarsFavoritesApp.git
   ```
   Replace `git@github.com:4qwerty/StarWarsFavoritesApp.git` with the actual URL of the repository.

2. **Navigate to the Project Directory**:
   ```bash
   cd StarWarsFavoritesApp
   ```

3. **Install Dependencies**:
   Run the following command to install the required dependencies:
   ```bash
   yarn install
   ```

## Running the Application

### For Android
1. **Set up Android Environment**:
   Make sure you have set up the Android development environment. This involves installing Android SDKs and creating a virtual device or connecting a physical device.

2. **Start the Metro Bundler**:
   ```bash
   yarn start
   ```
   This will start the Metro Bundler, which compiles the JavaScript code.

3. **Run the App on Android**:
   ```bash
   yarn android
   ```
   This will build the app and run it on the connected Android device or emulator.

### For iOS
1. **Set up iOS Environment**:
   Ensure you have Xcode installed and properly set up for iOS development.

2. **Install iOS Pods**:
   Navigate to the `ios` directory within the project and run:
   ```bash
   pod install
   ```
   This will install all necessary CocoaPods dependencies.

3. **Return to Project Root**:
   ```bash
   cd ..
   ```

4. **Run the App on iOS**:
   ```bash
   yarn ios
   ```
   This will build the app and run it on the connected iOS device or simulator.

## Troubleshooting
If you encounter any issues, make sure all the prerequisites are correctly installed and the environment variables are properly set. Refer to the official React Native documentation for detailed setup instructions.

## Conclusion
After following these steps, the Star Wars Favorites Mobile Application should be successfully running on your desired platform. For further assistance or to report issues, refer to the repository's issue tracker or documentation.

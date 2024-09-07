<img width="850" alt="habiTrack new" src="https://github.com/user-attachments/assets/deedd3a0-250b-476e-9fe2-51ab56e11561">

# habitTrack - The Healthy Habit Tracker


habiTrack is a demo habit tracker which aims to help users track and improve their behaviours through the use of persuasive technology.

## Features

| Persuasive Strategy  | Description |
| -------------   |:-------------:|
| Self-monitoring | Track your progress|
| Reminders       | Set and receive reminders|
| Social learning | Add friends and view their progress |
| Competition     | Challenge your friends to challenges|

## Installation

### Requirements
1. You must first install Expo, which can be found [here](https://docs.expo.dev/get-started/create-a-project/).
2. Dowwnload and set up the business logic [here](https://github.com/connor-cliff/habiTrack).
3. Ensure SQL Server is running.

### Instructions
After you have installed and set up Expo, follow these steps.

1. Download the program.
2. Open the code in your  IDE.
3. Run the following command in the terminal 
```
npx expo start --tunnel 

```
4. If you get the error:
```
CommandError: ngrok tunnel took too long to connect.
```
Then just try the command again. It usually works after a couple tries.

5. After successfully connecting, a QR code will be logged in the terminal. This can be scanned on an android or iOS mobile with Expo Go installed. 

Note: All instances of HTTP requests with "localhost" in the program code must be changed to your IP if using the mobile version.






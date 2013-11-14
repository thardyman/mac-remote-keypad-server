Mac Remote Keypad Server
========================

This project allows you to use your smartphone (or other device with a web browser) as a numeric keypad for your Mac. 
I got the idea because I use a MacBook Air every day, and it lacks a number pad. Since I always have my phone sitting 
next to my Mac on the desk I thought it would make sense if the phone acted as a number pad.  This would help when 
touch-typing long numbers.

This project handles the server side.  By default it hosts a website on port 4444, so anything that can connect to that
will see a numeric keypad which will trigger keypresses on the host machine.

This works well on a fast WiFi connection, but can be laggy.  I haven't tested using Bluetooth.

This is written using Node.js and Express.js

Future Ideas
============

- Create an app for Android / iPad that will render the keypad
- Make the app scan for a server
- Make the server issue a QR code that can be scanned by the app for fast syncing
- Package the server as a simple click to install download


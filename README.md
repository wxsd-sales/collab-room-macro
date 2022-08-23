# Collab Room Macro
This is a Webex Device Macro which controls other Webex Devices. It monitors the call status of a primary Webex Device in a room and automatically adds the secondary devices to the same meeting.

This macro uses the Globla Macro Messaging library for its communication:

https://github.com/CiscoDevNet/roomdevices-macros-samples/tree/master/Global%20Macro%20Messaging


![Cloud xAPI - Frame 8](https://user-images.githubusercontent.com/21026209/186166235-3c064cfb-4194-4de8-9e85-05d1a4a79166.jpg)

## Requirements

1. Two or more Webex Device registered to Webex Cloud services in shared mode ( personal mode devices not support )
2. Web admin access to the device to uplaod the macro.
3. Bot access token which as Read/Write API access to all devices

## Bot Setup

Creating a Bot:
1. Go to https://developer.webex.com/my-apps/new
2. Click on create a bot
3. Enter a bot name, username, select an icon and enter a description
4. Click Add Bot
5. On the next page, make a copy of the bot access token and store it securely, you will need this for the macro configuration

Give the Bot Access to the Webex Devices:
1. Log into https://admin.webex.com/
2. Go to the Workspaces tab
3. Click on the Workspaces for which this solution will be used
4. Under each workspaces devices section, click the 'Edit API access'
5. Click Add user or bot
6. Search for the name of the bot you just created
7. Select Full Access under the access level drop down
8. The bot will now have full read/write access to the device in that workspaces, repeat for any other devices.


## Macro Setup

Primary device:
1. Download the ``collab_room_primary.js`` and ``GMM_Lib.js``  file and upload it to the primary Webex Room.
2. Configure ``collab_room_primary.js`` by entering the Bot Access Token and Devices Ids for all secondary devices
3. Enable ``collab_room_primary.js`` in the macro editor.

Secondary device:
1. Download the ``collab_room_secondary.js`` and ``GMM_Lib.js``  file and upload it to the primary Webex Room.
2. Enable ``collab_room_secondary.js`` in the macro editor.

## Support

Please reach out to the WXSD team at [wxsd@external.cisco.com](mailto:wxsd@external.cisco.com?subject=collab-room-macro).

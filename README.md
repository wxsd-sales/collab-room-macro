# Collab Room Macro
This is a Webex Device Macro which controls other Webex Devices. It monitors the call status of a primary Webex Device in a room and automatically adds the secondary devices to the same meeting.

This macro uses the Globla Macro Messaging library for its communication:

https://github.com/CiscoDevNet/roomdevices-macros-samples/tree/master/Global%20Macro%20Messaging


![Cloud xAPI - Frame 8](https://user-images.githubusercontent.com/21026209/186166235-3c064cfb-4194-4de8-9e85-05d1a4a79166.jpg)

## Requirements

1. Two or more Webex Device registered to Webex Cloud services
2. Web admin access to the device to uplaod the macro.
3. Bot access token which as Read/Write API access to all devices

## Setup

Primary device:
1. Download the ``collab_room_primary.js`` and ``GMM_Lib.js``  file and upload it to the primary Webex Room.
2. Configure ``collab_room_primary.js`` by entering the Bot Access Token and Devices Ids for all secondary devices
3. Enable ``collab_room_primary.js`` in the macro editor.

Secondary device:
1. Download the ``collab_room_secondary.js`` and ``GMM_Lib.js``  file and upload it to the primary Webex Room.
2. Enable ``collab_room_secondary.js`` in the macro editor.

## Support

Please reach out to the WXSD team at [wxsd@external.cisco.com](mailto:wxsd@external.cisco.com?subject=collab-room-macro).

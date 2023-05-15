# Collab Room Macro
This is a Webex Device Macro which controls other Webex Devices. It monitors the call status of a primary Webex Device in a room and automatically adds the secondary devices to the same meeting.

This macro uses the Global Macro Messaging (GMM) library for its communication:

There are two ways this macro can be deployed:

### Local Admin and IP address:

![image](https://user-images.githubusercontent.com/21026209/189647192-f6887d44-bbac-45fe-b92a-305f85b9d6b6.png)


### Cloud xAPI and Bot token:

![image](https://user-images.githubusercontent.com/21026209/189647225-d3c73f4b-6844-4c6c-a394-e7385cbb28c1.png)



## Setup

### Prerequisites & Dependencies: 

#### Local Admin and IP address:

- Two or more Webex Devices
- Web admin access to the device to upload the macro.
- Local Admin accounts and static IP addresses for all secondary devices

#### Cloud xAPI and Bot token:

- Two or more Webex Device registered to Webex Cloud services in shared mode ( personal mode devices not support )
- Web admin access to the device to upload the macro.
- Bot access token which as Read/Write API access to all devices

### Bot Setup

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


### Macro Setup

#### Local Admin and IP address:

Primary device:
1. Download the ``collab_room_primary_local.js`` and ``GMM_Lib.js``  file and upload it to the primary Webex Room.
2. Configure ``collab_room_primary_local.js`` by entering the common local admin username and password for all the secondary devices, along with their IP addresses.
3. Enable ``collab_room_primary_local.js`` in the macro editor.

#### Cloud xAPI and Bot token:

Primary device:
1. Download the ``collab_room_primary_cloud.js`` and ``GMM_Lib.js``  file and upload it to the primary Webex Room.
2. Configure ``collab_room_primary_cloud.js`` by entering the Bot Access Token and Devices Ids for all secondary devices
- The Webex Device Id can be found under the Developer API tab of the web interface on any Cloud registered Webex Device.
- It can also be found on the Control Hub or on the Device under Status -> Webex -> DeveloperId
3. Enable ``collab_room_primary_cloud.js`` in the macro editor.

#### The Secondary Device Macro is common to both local and cloud deployments.
Secondary device:
1. Download the ``collab_room_secondary.js`` and ``GMM_Lib.js``  file and upload it to the primary Webex Room.
2. Enable ``collab_room_secondary.js`` in the macro editor.


## Demo

*For more demos & PoCs like this, check out our [Webex Labs site](https://collabtoolbox.cisco.com/webex-labs).


## License

All contents are licensed under the MIT license. Please see [license](LICENSE) for details.


## Disclaimer

Everything included is for demo and Proof of Concept purposes only. Use of the site is solely at your own risk. This site may contain links to third party content, which we do not warrant, endorse, or assume liability for. These demos are for Cisco Webex use cases, but are not Official Cisco Webex Branded demos.


## Questions
Please contact the WXSD team at [wxsd@external.cisco.com](mailto:wxsd@external.cisco.com?subject=collab-room-macro) for questions. Or, if you're a Cisco internal employee, reach out to us on the Webex App via our bot (globalexpert@webex.bot). In the "Engagement Type" field, choose the "API/SDK Proof of Concept Integration Development" option to make sure you reach our team. 

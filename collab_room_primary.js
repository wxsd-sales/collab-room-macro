/********************************************************
Copyright (c) 2022 Cisco and/or its affiliates.
This software is licensed to you under the terms of the Cisco Sample
Code License, Version 1.1 (the "License"). You may obtain a copy of the
License at
               https://developer.cisco.com/docs/licenses
All use of the material herein must be in accordance with the terms of
the License. All rights not expressly granted by the License are
reserved. Unless required by applicable law or agreed to separately in
writing, software distributed under the License is distributed on an "AS
IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
or implied.
*********************************************************
 * 
 * Macro Author:      	William Mills
 *                    	Technical Solutions Specialist 
 *                    	wimills@cisco.com
 *                    	Cisco Systems
 * 
 * Version: 1-0-0
 * Released: 08/23/22
 * 
 * This is a Webex Device Macro which controls other Webex Devices. It monitors 
 * the call status of a primary Webex Device in a room and automatically adds 
 * the secondary devices to the same meeting.
 * 
 * This is the Primary Macro which controls the secondary devices.
 * 
 * This macro uses the Global Macro Messaging library which can be downloaded here:
 * https://github.com/CiscoDevNet/roomdevices-macros-samples/tree/master/Global%20Macro%20Messaging
 * 
 ********************************************************/

import xapi from 'xapi';
import { GMM } from './GMM_Lib'

const config = {
  deviceToken: 'Your Access Token',
  devices: [
    'Webex Device ID 1',
    'Webex Device ID 2',
    'Webex Device ID 3',
    'Webex Device ID 4',
  ]
};

const webex_callout = new GMM.Connect.Webex(config.deviceToken, config.devices);

xapi.Event.CallSuccessful.on(callSuccess);
xapi.Event.CallDisconnect.on(callDisconnect);

async function callSuccess(event) {
  console.log('Call successfully connected to: ' + event.RemoteURI);
  const type = await xapi.Status.Conference.Call[event.CallId].Meeting.get();
  if(type === 'False') {
    console.log('Not a meeting, ignoring');
    return;
  }
  console.log('Call is a meeting, getting remote number');

  const number = await xapi.Status.Call[event.CallId].CallbackNumber.get();

  console.log('Notifying other devices to dial:  ' + number);
  webex_callout.command({ dial: number }).post();
}

function callDisconnect(event) {
  console.log('Call disconnected: ' + event.RemoteURI)
  console.log('Notifying other devices');
  webex_callout.command({ disconnect: event.RemoteURI }).post();
}

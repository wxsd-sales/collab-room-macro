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
 * This is the Secondary Macro which receives control commands from the Primary Macro.
 * Further details are listed in the readme here:
 * https://github.com/wxsd-sales/collab-room-macro
 * 
 * This macro uses the Global Macro Messaging library which can be downloaded here:
 * https://github.com/CiscoDevNet/roomdevices-macros-samples/tree/master/Global%20Macro%20Messaging
 * 
 ********************************************************/

import xapi from 'xapi';
import { GMM } from './GMM_Lib'

GMM.Event.Receiver.on(event => {
  switch (event.Type) {
    case 'Status':
      console.log(event)
      break;
    case 'Command':
      console.warn(event)
      if (event.Value.hasOwnProperty('dial')) {
        processDial(event.Value);
      }
      else if (event.Value.hasOwnProperty('disconnect')) {
        processDisconnect(event.Value);
      }
      break;
    case 'Error':
      console.error(event)
      break;
  }
})


function processDial(event) {
  console.log('Calling: ' + event.dial);
  xapi.Command.Dial({
    Number: event.dial
  })
}

function processDisconnect(event) {
  console.log('Disconnecting: ' + event.disconnect);
  xapi.Command.Call.Disconnect();
}

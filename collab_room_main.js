import xapi from 'xapi';
import { GMM } from './GMM_Lib'

const webex_callout = new GMM.Connect.Webex('myToken', deviceId_1, deviceId_2, ...);

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

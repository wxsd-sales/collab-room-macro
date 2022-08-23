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

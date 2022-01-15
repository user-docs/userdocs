import { parseElementMessage, parseMessage, assignUdId } from './parser'
import * as actions from './actions'
import * as Recorder from './recorder'

declare global {
  interface Window { 
    eventRecorder: any;
    generateSelector: Function;
    parseElementMessage: Function;
    createAnnotation: Function;
    absolutePositionElement: Function;
    adjustPlacement: Function;
    setSize: Function;
    addYClass: Function;
    addXClass: Function;
    highlightedElement: HTMLElement;
    clickedElement: any,
    subscribe: Function,
    unsubscribe: Function,
    message: object
  }
}

window.eventRecorder = Recorder
window.eventRecorder.initialize()
window.generateSelector = Recorder.generateSelector
window.parseElementMessage = parseElementMessage
window.addEventListener('message', function (message: MessageEvent) {
  if(message.data.action == 'subscribe') {
    this.chrome.runtime.sendMessage({ action: 'subscribe' })
  }
  if(message.data.action == 'unsubscribe') {
    this.chrome.runtime.sendMessage({ action: 'unsubscribe' })
  }
})

document.addEventListener("contextmenu", (event) => {
  var message = parseMessage(event)
  window.message = message
}, true)

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if(request == "get_clicked_element") {
    sendResponse(window.message);
  }
});
import { parseElementMessage, parseMessage, assignUdId } from './parser'
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
    message: object
  }
}

window.eventRecorder = Recorder
window.eventRecorder.initialize()
window.generateSelector = Recorder.generateSelector
window.parseElementMessage = parseElementMessage

document.addEventListener("contextmenu", (event) => {
  var message = parseMessage(event)
  message = assignUdId(message, event.target as Element)
  window.message = message
}, true)

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if(request == "get_clicked_element") {
    sendResponse(window.message);
  }
});
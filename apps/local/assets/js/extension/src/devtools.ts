import { actions } from "./actions";

export function sendCurrentSelector() {
  chrome.devtools.inspectedWindow.eval(`parseElementMessage($0)`, { useContentScriptContext: true }, 
    (result, isException) => {
      if(isException) console.log(isException) 
      else { 
        result["action"] = actions.ITEM_SELECTED
        backgroundPageConnection.postMessage(result) 
      }
    }
  )
}

var backgroundPageConnection = chrome.runtime.connect({ name: "devtools" }); 
chrome.devtools.panels.elements.onSelectionChanged.addListener(sendCurrentSelector)
console.log("Devtools init")
import { Socket, Channel } from 'phoenix'
import { actions } from './actions'

function menuHandler(channel) {
  function apply(info, tab) {
    console.log(`Menu Interaction with ${JSON.stringify(info)}`)
    chrome.tabs.sendMessage(tab.id, "get_clicked_element", {frameId: info.frameId}, data => {
      data.action = info.menuItemId
      console.log(data)
      channel.push("event:context_menu_interaction", data)
    });
  }
  return apply
}

chrome.contextMenus.removeAll()
chrome.contextMenus.create({
  id: actions.FULL_SCREEN_SCREENSHOT,
  title: 'Full Screen Screenshot',
  contexts: ['all']
})
chrome.contextMenus.create({
  id: actions.ELEMENT_SCREENSHOT,
  title: 'Element Screenshot',
  contexts: ['all']
})
chrome.contextMenus.create({
  id: actions.BADGE,
  title: 'Badge Element',
  contexts: ['all']
})
chrome.contextMenus.create({
  id: actions.OUTLINE,
  title: 'Outline Element',
  contexts: ['all']
})
chrome.contextMenus.create({
  id: actions.BADGE_OUTLINE,
  title: 'Badge + Outline Element',
  contexts: ['all']
})
chrome.contextMenus.create({
  id: actions.BLUR,
  title: 'Blur Element',
  contexts: ['all']
})
chrome.contextMenus.create({
  id: actions.BADGE_BLUR,
  title: 'Badge + Blur Element',
  contexts: ['all']
})  
chrome.contextMenus.create({
  id: actions.SVG,
  title: 'SVG',
  contexts: ['all']
})

const socket = new Socket("ws://localhost:4001/socket")
socket.connect()
const channel = socket.channel("extension")
channel.join()

chrome.contextMenus.onClicked.addListener(menuHandler(channel))

chrome.runtime.onMessage.addListener(message => {
  if(message.action == actions.SUBSCRIBE) { 
    subscribe() 
  } else if (message.action == actions.UNSUBSCRIBE) { 
    unsubscribe() 
  } else {
    chrome.storage.local.get(['subscribed'], (result) => {
      if(result.subscribed == true) {
        channel.push("browser_interaction", message)
      }
    })
  }
})

var DEVTOOLS_PORT: chrome.runtime.Port

chrome.runtime.onConnect.addListener(function(port) {
  if (port.name === 'devtools') {
    DEVTOOLS_PORT = port
    port.onMessage.addListener(function(message) {
      console.log(`Background received devtools ${message.action} message`)
      chrome.storage.local.get(['subscribed'], (result) => {
        if (message.action === actions.ITEM_SELECTED) {
          console.log(`sending ${message.action} message`)
          channel.push("browser_interaction", message)
        }
      })
    })
  }
})

function subscribe() { chrome.storage.local.set({ subscribed: true }) }
function unsubscribe() { chrome.storage.local.set({ subscribed: false }) }
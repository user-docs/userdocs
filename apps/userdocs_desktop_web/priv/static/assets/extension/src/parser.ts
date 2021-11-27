import finder from '@medv/finder'
import { actions } from './actions'
import { v4 as uuidv4 } from 'uuid';

export function parseMessage(e) {
  const keycode = e.keyCode ? e.keyCode : null
  const udId = e.target.getAttribute("udId")
  return {
    generatedSelector: getSelector(e.target),
    directSelector: getPathTo(e.target),
    value: e.target.value + String.fromCharCode(keycode),
    elementName: getName(e.target),
    tagName: e.target.tagName,
    action: actions[e.type],
    keyCode: keycode,
    href: getElementLocation(e.target),
    pageTitle: getPageTitle(),
    coordinates: getCoordinates(e),
    udId: udId,
    outerHTML: e.target.outerHTML
  }
}

export function parseElementMessage(element) {
  return {
    generatedSelector: getSelector(element),
    elementName: getName(element),
    tagName: element.tagName,
    href: getElementLocation(element),
    pageTitle: getPageTitle()
  }
}

export function getWindowLocation() { return window.location.href }

function getElementLocation (element) {
  return element.location ? element.location.href : window.location.href
}

function getPageTitle() {return document.title}

function getSelector (element) {
  if (element.id) return `#${element.id}`
  try {
    const selector = finder(element, {
      seedMinLength: 5,
      optimizedMinLength: (element.id) ? 2 : 10})
    return selector
  } catch(e) {
    console.log(e)
    return null
  }
}


function getCoordinates (evt) {
  const eventsWithCoordinates = {
    mouseup: true,
    mousedown: true,
    mousemove: true,
    mouseover: true
  }
  return eventsWithCoordinates[evt.type] ? { x: evt.clientX, y: evt.clientY } : null
}

export function getName (element) {
  var texts = []
  getText(element, texts)
  if (texts[0]) return texts[0]
  else if (element.name) return element.name.trim()
  else return ""
}

export function getText(node, accumulator) {
  if (node.nodeType === 3) // 3 == text node
    accumulator.push(node.nodeValue)
  else
    for (let child of node.childNodes)
      getText(child, accumulator)
}

function getPathTo(element) {
  if (element === document.body)
      return "//" + element.tagName.toLowerCase();

  var ix = 0;
  var siblings= element.parentNode.childNodes;
  for (var i = 0; i<siblings.length; i++) {
      var sibling= siblings[i];
      
      if (sibling===element) return getPathTo(element.parentNode) + '/' + element.tagName.toLowerCase() + '[' + (ix + 1) + ']';
      
      if (sibling.nodeType===1 && sibling.tagName === element.tagName) {
          ix++;
      }
  }
}

export function assignUdId(message, eventTarget) {
  const udId = eventTarget.getAttribute("udId")
  if (!udId) {
    const uuid = uuidv4()
    console.log(message.directSelector)
    const element = document.evaluate(message.directSelector, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE,  null).singleNodeValue as Element
    element.setAttribute("udId", uuid)
    message.udId = uuid
  }
  return message
}

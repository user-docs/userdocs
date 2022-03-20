function createAnnotation(type, annotationId, labelText) {
  if (type == 'badge') createBadgeAnnotation(annotationId, labelText)
  if (type == 'outline') createBadgeAnnotation(annotationId)
}

function createBadgeAnnotation(annotationId, labelText) {
  var locatorElement = createLocator(annotationId)
  var maskElement = createMask(annotationId)
  var badgeLocator = createBadgeLocator(annotationId)
  var badgeElement = createBadge(annotationId, labelText)
  insertAbsolute(locatorElement)
  locatorElement.append(maskElement)
  maskElement.append(badgeLocator); 
  badgeLocator.append(badgeElement); 
  return locatorElement
}

function createOutlineAnnotation(annotationId) {
  var locatorElement = createLocator(annotationId)
  var outlineElement = createOutline(annotationId)
  insertAbsolute(locatorElement)
  locatorElement.append(outlineElement)
}

function createBadgeOutlineAnnotation(annotationId, labelText) {
  var locatorElement = createLocator(annotationId)
  var maskElement = createMask(annotationId)
  var badgeLocator = createBadgeLocator(annotationId)
  var badgeElement = createBadge(annotationId, labelText)
  var outlineElement = createOutline(annotationId)
  insertAbsolute(locatorElement)
  locatorElement.append(outlineElement)
  locatorElement.append(maskElement)
  maskElement.append(badgeLocator);
  badgeLocator.append(badgeElement); 
}

function createLocator(annotationId) {
  var element = document.createElement('div');
  element.id = `userdocs-annotation-${annotationId}-locator`
  element.classList.add("userdocs-locator")
  return element
}

function setFontSize(selector, fontSize) {
  var element = document.querySelector(selector)
  if(fontSize > 0) element.style.fontSize = `${fontSize}px`;
  return element
}

function absolutePositionElement(selector, top, left) {
  var element = document.querySelector(selector)
  element.style.top = `${parseInt(top)}px`
  element.style.left = `${parseInt(left)}px`
  return element
}

function setSize(selector, width, height) {
  var element = document.querySelector(selector)
  element.style.width = `${parseInt(width)}px`
  element.style.height = `${parseInt(height)}px`
  return element
}

function addXClass(selector, x_orientation) {
  var element = document.querySelector(selector)
  if (x_orientation == "M") element.classList.add("ud-x-middle")
  else if (x_orientation == "R") element.classList.add("ud-x-right")
  else if (x_orientation == "L") element.classList.add("ud-x-left")
  return element
}

function addYClass(selector, y_orientation) {
  var element = document.querySelector(selector)
  if (y_orientation == "M") element.classList.add("ud-y-middle")
  if (y_orientation == "T") element.classList.add("ud-y-top")
  if (y_orientation == "B") element.classList.add("ud-y-bottom")
  return element
}

function adjustPlacement(selector, top, left) {
  var element = document.querySelector(selector)
  if (top > 0) element.style.top = `${parseInt(top)}px`
  if (left > 0) element.style.left = `${parseInt(left)}px`
  return element
}

function createBadgeLocator(annotationId) {
  var element = document.createElement('div');
  element.id = `userdocs-badge-${annotationId}-locator`
  element.classList.add("userdocs-locator")
  return element
}

function createMask(annotationId) {
  var element = document.createElement('div');
  element.id = `userdocs-annotation-${annotationId}-mask`
  element.classList.add("userdocs-mask")
  return element
}

function createOutline(annotationId) {
  var element = document.createElement('div');
  element.id = `userdocs-annotation-${annotationId}-outline`
  element.classList.add("userdocs-outline")
  return element
}

function createBadge(annotationId, labelText) {
  var element = document.createElement('span');
  element.id = `userdocs-annotation-${annotationId}-badge`
  element.textContent = labelText;
  element.classList.add("userdocs-badge")
  return element
}

function setOutlineColor(selector, color) {
  var element = document.querySelector(selector)
  element.style.outlineColor = color;
  return element;
}

function setOutlineWidth(selector, thickness) {
  var element = document.querySelector(selector)
  element.style.outlineWidth = `${thickness}px`;
  return element;
}

function addBlurClass(element) {
  element.classList.add('userdocs-blur')
  return element
}

function addRootAnnotationClass(element) {
  element.classList.add('userdocs-annotation')
  return element
}

function getElement(strategy, selector) {
  if (strategy == 'css') return getElementByCss(selector)
  else if (strategy == 'xpath') return getElementByXpath(selector)
}

function getElementByCss(selector) {return document.querySelector(selector)}
function getElementByXpath(selector) {
  return document.evaluate(
    selector, document, null,
    XPathResult.FIRST_ORDERED_NODE_TYPE, null
  ).singleNodeValue
}
  
function insertAbsolute(elementToInsert) {
  document.body.prepend(elementToInsert)
}

function getElements(strategiesAndSelectors) {
  var elements = [];
  strategiesAndSelectors.forEach(strategyAndSelector => {
    const element = getElement(strategyAndSelector.strategy, strategyAndSelector.selector);
    elements.push(element)
  })
  return elements
}

function getElementsBoundingBox(elements) {
  for(var i = 0; i < elements.length; ++i){
      bottom = Math.min(minX, textElements[i].offsetLeft);
      top = Math.max(maxX, textElements[i].offsetLeft + textElements[i].offsetWidth);
      left = Math.min(minY, textElements[i].offsetTop);
      right = Math.max(maxY, textElements[i].offsetTop + textElements[i].offsetHeight);   
  }
  return {
    top: top,
    bottom: bottom,
    left: left,
    right: right,
    width: right - left,
    height: top - bottom
  }
}
  
window.createAnnotation = createAnnotation
window.absolutePositionElement = absolutePositionElement
window.setSize = setSize
window.addYClass = addYClass
window.addXClass = addXClass
window.adjustPlacement = adjustPlacement
window.setFontSize = setFontSize
window.addBlurClass = addBlurClass
window.getElement = getElement
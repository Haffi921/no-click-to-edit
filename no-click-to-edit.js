/**
 * @param {HTMLElement} target
 * @returns {boolean}
 */
function isAllowedElement(target) {
  // Check for input elements
  if (
    target.tagName === 'INPUT' ||
    target.tagName === 'TEXTAREA' ||
    target.tagName === 'SELECT' ||
    target.tagName === 'BUTTON'
  ) {
    return true;
  }

  // Check for Atlastian input elements
  if (target.tagName === 'DIV') {
    const role = target.getAttribute('role');
    const allowedRoles = ['listbox', 'option', 'menu', 'menuitem', 'button', 'group'];
    if (allowedRoles.includes(role)) {
      return true;
    }
  }

  // Allow normal click on normal hyperlinks and images
  if (target.tagName === 'A' || target.tagName === 'IMG') {
    return true;
  }

  // Allow normal click on media cards (i.e. Attachments)
  if (target.tagName === 'DIV' && target.getAttribute('data-testid')?.startsWith('media-card')) {
    return true;
  }

  // Allow normal click on buttons with css class
  // if (target.tagName === 'BUTTON') {
  // const classes = target.getAttribute('class')?.split(' ') || [];
  // return classes.some((cl) => cl.startsWith('css'));
  // }

  return false;
}

/**
 * @param {HTMLElement} target
 * @returns {boolean}
 */
function willTriggerClickToEdit(target) {
  // Check for presentation role
  if ((target.tagName === 'FORM' || target.tagName === 'DIV') && target.getAttribute('role') === 'presentation') {
    return true;
  }

  // Check for inline-edit div
  if (target.tagName === 'DIV' && target.getAttribute('data-testid') === 'inline-edit') {
    return true;
  }

  return false;
}

/**
 * @param {MouseEvent} event
 */
function stopClickToEdit(event) {
  // allow normal click-to-edit when key is held
  if (event.metaKey || event.ctrlKey) {
    return;
  }

  for (let target = event.target; target !== document; target = target.parentNode) {
    // Check for Click-To-Edit triggers
    if (willTriggerClickToEdit(target)) {
      console.log('No-Click-To-Edit: Click intercepted. Hold Ctrl/Cmd to edit.');
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    // Check for allowed attributes
    if (isAllowedElement(target)) {
      return;
    }
  }
}

try {
  document.addEventListener('click', stopClickToEdit, { capture: true });
  console.log('No-Click-To-Edit: Successfully initialized');
} catch (error) {
  console.error('No-Click-To-Edit: Failed to initialize:', error);
}

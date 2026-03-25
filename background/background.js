/**
 * TOTP Authenticator - Background Service Worker
 * Cross-browser compatible (Chrome, Safari, Firefox)
 */

// Detect browser APIs
const browserAPI = typeof browser !== 'undefined' ? browser : chrome;
const isChrome = typeof chrome !== 'undefined' && !!chrome.runtime && typeof browser === 'undefined';
const hasSidePanel = isChrome && typeof chrome.sidePanel !== 'undefined';

// On install
browserAPI.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    console.log('TOTP Authenticator instalado');
    browserAPI.storage.local.get(['accounts'], (result) => {
      if (!result.accounts) {
        browserAPI.storage.local.set({ accounts: [] });
      }
    });
  }
});

// Handle action click - Chrome with SidePanel vs Safari/Firefox with popup
if (hasSidePanel) {
  // Chrome: Open side panel
  chrome.action.onClicked.addListener((tab) => {
    chrome.sidePanel.open({ windowId: tab.windowId });
  });

  // Configure side panel behavior
  chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true });
}
// Note: For Safari/Firefox, the popup is configured in manifest.json

// Handle messages from popup/sidepanel
browserAPI.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'captureScreen') {
    browserAPI.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]) {
        browserAPI.tabs.captureVisibleTab(tabs[0].windowId, { format: 'png' }, (dataUrl) => {
          const lastError = browserAPI.runtime.lastError;
          if (lastError) {
            sendResponse({ error: lastError.message });
          } else {
            sendResponse({ dataUrl });
          }
        });
      } else {
        sendResponse({ error: 'No hay pestana activa' });
      }
    });
    return true; // Keep channel open for async response
  }
});

const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  api: {
    minimizeApp() {
      ipcRenderer.send('minimizeApp')
    },
    maximizeRestoreApp() {
      ipcRenderer.send('maximizeRestoreApp')
    },
    closeApp() {
      ipcRenderer.send('closeApp');
    }
  }
});

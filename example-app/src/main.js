import './style.css';
import { Capacitor } from '@capacitor/core';
import { CapacitorUpdater } from '@capgo/capacitor-updater';
import { CapgoInAppReview } from '@capgo/capacitor-in-app-review';

const output = document.getElementById('output');
const setOutput = (value) => {
  output.textContent = typeof value === 'string' ? value : JSON.stringify(value, null, 2);
};

document.getElementById('request-review').addEventListener('click', async () => {
  try {
    await CapgoInAppReview.requestReview();
    setOutput('Review flow finished. The native dialog may not appear every time.');
  } catch (error) {
    setOutput(`Error: ${error?.message ?? error}`);
  }
});

document.getElementById('get-version').addEventListener('click', async () => {
  try {
    setOutput(await CapgoInAppReview.getPluginVersion());
  } catch (error) {
    setOutput(`Error: ${error?.message ?? error}`);
  }
});

if (Capacitor.isNativePlatform()) {
  CapacitorUpdater.notifyAppReady().catch((error) => console.error('Capgo notifyAppReady failed', error));
}

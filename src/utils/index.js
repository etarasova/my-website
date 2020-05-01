import DeviceDetector from "device-detector-js"

const escapeSelector = (selector) => {
  return selector.replace(/[\W_]+/g, ' ').replace(/\s+/g, '-').toLowerCase();
};

export const getDeviceClasses = () => {
  if (typeof window === "undefined") {
    return "";
  }

  const device = new DeviceDetector().parse(window.navigator.userAgent);
  const os = escapeSelector( device.os.name);
  const type = escapeSelector(device.device.type);
  const browser = escapeSelector(device.client.name);
  return [os, type, browser].join(" ");
}

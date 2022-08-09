export default function usePlatform() {

  let { platform, userAgent } = navigator;
  platform = platform.toLowerCase();
  userAgent = userAgent.toLowerCase();

  const isWindows = platform === "win32"
  const isAndroid = userAgent.indexOf("android") > -1;
  const isIos = platform === "iphone" || platform === "ipad";
  const isMacOs = platform === "macintel";
  const isLinux = platform.indexOf("linux") > -1;

  return {
    platform,
    isDesktop: isWindows || isMacOs || isLinux,
    isMobile: isAndroid || isIos,
    isWindows,
    isAndroid,
    isIos,
    isMacOs,
    isLinux
  };
}
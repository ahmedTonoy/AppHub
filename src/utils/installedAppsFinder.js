import { getFromLs } from "./localStorageTracker";

export const installedAppsFinder = (allApps) => {
  const installedAppIds = getFromLs();
  const installedApps = allApps.filter((app) =>
    installedAppIds.includes(app.id),
  );
  return installedApps;
};
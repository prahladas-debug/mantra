export type VolumeKeysModuleEvents = {
  /** A volume button was pressed: 1 for down (next page), -1 for up (previous page). */
  onKey: (event: { dir: 1 | -1 }) => void;
};

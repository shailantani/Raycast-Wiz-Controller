/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Wiz Light IP Address - The IP address of your Wiz light (e.g., 192.168.1.50) */
  "ipAddress": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `turn-on` command */
  export type TurnOn = ExtensionPreferences & {}
  /** Preferences accessible in the `turn-off` command */
  export type TurnOff = ExtensionPreferences & {}
  /** Preferences accessible in the `set-scene` command */
  export type SetScene = ExtensionPreferences & {}
  /** Preferences accessible in the `set-color` command */
  export type SetColor = ExtensionPreferences & {}
  /** Preferences accessible in the `set-temperature` command */
  export type SetTemperature = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `turn-on` command */
  export type TurnOn = {}
  /** Arguments passed to the `turn-off` command */
  export type TurnOff = {}
  /** Arguments passed to the `set-scene` command */
  export type SetScene = {}
  /** Arguments passed to the `set-color` command */
  export type SetColor = {}
  /** Arguments passed to the `set-temperature` command */
  export type SetTemperature = {}
}


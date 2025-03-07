/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

export interface ILocaleInfo {
  platform: "windows" | "macos";
  regionalFormat: string;
  shortDate: string;
  longDate: string;
  fullDate?: string;
  shortTime: string;
  longTime: string;
}

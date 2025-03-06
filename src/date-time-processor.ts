/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import type { RegionalSettings } from './windows-regional-formats';
import { format } from 'date-fns';
import type { Locale } from 'date-fns/locale';
import { enUS } from 'date-fns/locale';
import { localizedFormatsMap } from './windows-regional-formats';

export class DateTimeProcessor {

    private fnsLocale: Locale;
    private defaultFormatSettings: RegionalSettings;

    /**
     * Instantiates DateTimeProcessor
     * @param locale The desired locale to which to format the date and time value (default: en-US)
     */
    constructor(private locale = 'en-US') {
        let localizedFormatSettings = localizedFormatsMap.get(this.locale.toLowerCase());

        if (!localizedFormatSettings) {
            throw new Error(`Locale ${this.locale} is not supported`);
        }
        this.fnsLocale = enUS;
        if (this.locale.toLowerCase() !== 'en-us') {
            const fnsLocale = this.locale.replace('-', '');
            /* webpackMode: "lazy", webpackChunkName: "df-[index]", webpackExclude: /_lib/ */
            import(`date-fns/locale/${fnsLocale}`).then(locale => {
                this.fnsLocale = locale;
            });
        }

        this.defaultFormatSettings = localizedFormatSettings;
    }

    public formatDateTime(input: {
        dateTime: number | Date,
        dateTimeFormat?: string,
        
    }, useLocale = false) {
        const { dateTime, dateTimeFormat } = input;
        const formatForDate = dateTimeFormat || this.defaultFormatSettings.ShortDateFormat;
        
        return format(dateTime, formatForDate, { locale: this.fnsLocale });
    }
}

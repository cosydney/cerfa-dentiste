import React from 'react';
import areIntlLocalesSupported from 'intl-locales-supported';

let DateFormat;

/**
 * Use the native Intl.DateTimeFormat if available, or a polyfill if not.
 */
if (areIntlLocalesSupported(['fr', 'fa-IR'])) {
  DateFormat = global.Intl.DateTimeFormat;
} else {
  const IntlPolyfill = require('intl');
  DateFormat = IntlPolyfill.DateTimeFormat;
  require('intl/locale-data/jsonp/fr');
  require('intl/locale-data/jsonp/fa-IR');
}

export default DateFormat;

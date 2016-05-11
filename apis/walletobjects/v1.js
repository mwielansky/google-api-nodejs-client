/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* jshint maxlen: false */

'use strict';

var createAPIRequest = require('../../lib/apirequest');

/**
 * Wallet Object API
 *
 * Accesses the latest features for managing Android Pay.
 *
 * @example
 * var google = require('googleapis');
 * var walletobjects = google.walletobjects('v1');
 *
 * @namespace walletobjects
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Walletobjects
 */
function Walletobjects(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.loyaltyObject = {

      /**
       * walletobjects.loyaltyObject.get
       *
       * @desc Returns the loyalty object with the given object ID.
       *
       * @memberOf! walletobjects(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.resourceId The unique identifier for a resource
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      get: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/walletobjects/v1/loyaltyObject/{resourceId}',
            method: 'GET'
          },
          params: params,
          requiredParams: [],
          pathParams: ['resourceId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
    }
  };
}

module.exports = Walletobjects;

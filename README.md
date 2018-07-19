# OData JS SDK

## Installation
```bash
 npm install restly/odata-js-sdk
```
## Usage
```js
  var bridge = require('odata-js-sdk')
  // Vendor defaults to `test`
  var bridge = new BridgeAPI(ACCESS_TOKEN, [vendor])

  // Fetches a list of Properties, provided by the vendor
  bridge
    .Properties()
    .exec()
```

## API
### new BridgeAPI(token, [vendor])
Returns a new instance of BridgeAPI. Requires an API token and optionally set the vendor (the MLS data source), defaults to `test`.

## bridge.Property([ListingKey])
## bridge.Member([MemberKey])
## bridge.Office([OfficeKey])
## bridge.OpenHouse([OpenHouseKey])
Returns a single entity if a key is specified. If a key is not specified all related entities are returned.

## bridge.Media()
Returns all media.

## bridge.count()
The number of results from the most recent query, set to 0 before and during query execution.

## bridge.next()
Paginates to the next page of results.

## bridge.prev()
Paginates to the previous page of results.


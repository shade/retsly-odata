# OData JS SDK

## Installation
```bash
 npm install restly/odata-js-sdk
```
## Usage
```js
  var Retsly = require('odata-js-sdk')
  // Vendor defaults to `test`
  var retsly = new Retsly(ACCESS_TOKEN, [vendor])

  // Fetches a list of Properties, provided by the vendor
  retsly
    .Properties()
    .exec()
```

## API
### new Retsly(token, [vendor])
Returns a new instance of Retsly. Requires an API token and optionally set the vendor (the MLS data source), defaults to `test`.

## retsly.Property([ListingKey])
## retsly.Member([MemberKey])
## retsly.Office([OfficeKey])
## retsly.OpenHouse([OpenHouseKey])
Returns a single entity if a key is specified. If a key is not specified all related entities are returned.

## retsly.Media()
Returns all media.

## retsly.count()
The number of results from the most recent query, set to 0 before and during query execution.

## retsly.next()
Paginates to the next page of results.

## retsly.prev()
Paginates to the previous page of results.

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

## retsly.Media()

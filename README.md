#Opbeat hook for Sails.js

## Installation
To install Opbeat hook follow this simaple steps:

- Install hook via npm `npm install --save sails-hook-opbeat`
- Configure hook [See configuration section][1]
- Add this following line in the first line of your `app.js`: `require('sails-hook-opbeat/register');`

## [1]: Configuration

List of available options for Opbeat hook you could see here: [Opbeat configuration](https://github.com/opbeat/opbeat-node/#configuration)

Create a config file `config/opbeat.js` with this content:
```javascript

module.exports.opbeat = {

  /**
   * Your Opbeat application id
   * @type {String}
   */
  appId: '',

  /**
   * Your Opbeat organization id
   * @type {String}
   */
  organizationId: '',

  /**
   * Your Opbeat secret token
   * @type {String}
   */
  secretToken: '',

  /**
   * Is Opbeat active now
   */
  active: process.env.NODE_ENV === 'production'
};
```

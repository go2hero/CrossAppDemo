/** 
 * Utility module.
 * @module utils
 */
var dwv = dwv || {};
/**
 * Namespace for utility functions.
 * @class utils
 * @namespace dwv
 * @static
 */
dwv.utils = dwv.utils || {};

/**
 * Capitalise the first letter of a string.
 * @method capitaliseFirstLetter
 * @static
 * @param {String} string The string to capitalise the first letter.
 * @return {String} The new string.
 */
dwv.utils.capitaliseFirstLetter = function(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
};

/**
 * Clean string: trim and remove ending.
 * @method cleanString
 * @static
 * @param {String} string The string to clean.
 * @return {String} The cleaned string.
 */
dwv.utils.cleanString = function(string)
{
    var str = string.trim();
    //get rid of ending zero-width space (u200B)
    if( str[str.length-1] === String.fromCharCode("u200B") ) {
        str = str.substring(0, str.length-1); 
    }
    return str;
};

/**
 * Split string:
 * root?key0=val0&key1=val1 returns [{"key"="key0", "value"="val0"}, {"key"="key1", "value"="val1"}]
 * Returns null if not a query string (no question mark).
 * @method splitQueryString
 * @static
 * @param {String} inputStr The string to split.
 * @return {Object} The split string.
 */
dwv.utils.splitQueryString = function(inputStr)
{
    // check if query string
    if( inputStr.indexOf('?') === -1 ) return null;
    // result
    var result = {};
    // base
    result.base = inputStr.substr(0, inputStr.indexOf('?'));
    // take after the ?
    var query = inputStr.substr(inputStr.indexOf('?')+1);
    // split key/value pairs
    var pairs = query.split('&');
    for( var i = 0; i < pairs.length; ++i )
    {
        var pair = pairs[i].split('=');
        // if the key does not exist, create it
        if( !result[pair[0]] ) result[pair[0]] = pair[1];
        else
        {
            if( !( result[pair[0]] instanceof Array) ) {
                result[pair[0]] = [result[pair[0]]];
            }
            result[pair[0]].push(pair[1]);
        }
    }
    return result;
};


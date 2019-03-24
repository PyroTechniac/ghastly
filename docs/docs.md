## Classes

<dl>
<dt><a href="#GhastlyClient">GhastlyClient</a> ⇐ <code><a href="https://discord.js.org/#/docs/main/master/class/Client">Client</a></code></dt>
<dd><p>The base client for Ghastly</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#GhastlyClientOptions">GhastlyClientOptions</a> : <code>Object</code></dt>
<dd></dd>
</dl>

<a name="GhastlyClient"></a>

## GhastlyClient ⇐ [<code>Client</code>](https://discord.js.org/#/docs/main/master/class/Client)
The base client for Ghastly

**Kind**: global class  
**Extends**: [<code>Client</code>](https://discord.js.org/#/docs/main/master/class/Client)  

* [GhastlyClient](#GhastlyClient) ⇐ [<code>Client</code>](https://discord.js.org/#/docs/main/master/class/Client)
    * [.prefix](#GhastlyClient+prefix) : <code>string</code> \| <code>Array.&lt;string&gt;</code>
    * ~~[.login()](#GhastlyClient+login)~~

<a name="GhastlyClient+prefix"></a>

### ghastlyClient.prefix : <code>string</code> \| <code>Array.&lt;string&gt;</code>
The client's prefix, can be a string or an array of prefixes

**Kind**: instance property of [<code>GhastlyClient</code>](#GhastlyClient)  
<a name="GhastlyClient+login"></a>

### ~~ghastlyClient.login()~~
***Deprecated***

Throws an error, use the [start](GhastlyClient#start) method instead

**Kind**: instance method of [<code>GhastlyClient</code>](#GhastlyClient)  
<a name="GhastlyClientOptions"></a>

## GhastlyClientOptions : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [prefix] | <code>string</code> \| <code>Array.&lt;string&gt;</code> | The prefix for the client |
| token | <code>string</code> | The client's token |


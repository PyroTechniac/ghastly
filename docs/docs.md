## Classes

<dl>
<dt><a href="#ThreadClient">ThreadClient</a> ⇐ <code><a href="https://discord.js.org/#/docs/main/master/class/Client">Client</a></code></dt>
<dd><p>The base client for Ghastly</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#ThreadClientOptions">ThreadClientOptions</a> : <code>Object</code></dt>
<dd></dd>
</dl>

<a name="ThreadClient"></a>

## ThreadClient ⇐ [<code>Client</code>](https://discord.js.org/#/docs/main/master/class/Client)
The base client for Ghastly

**Kind**: global class  
**Extends**: [<code>Client</code>](https://discord.js.org/#/docs/main/master/class/Client)  

* [ThreadClient](#ThreadClient) ⇐ [<code>Client</code>](https://discord.js.org/#/docs/main/master/class/Client)
    * [new ThreadClient(options)](#new_ThreadClient_new)
    * [.prefix](#ThreadClient+prefix) : <code>string</code> \| <code>Array.&lt;string&gt;</code>
    * ~~[.login()](#ThreadClient+login)~~

<a name="new_ThreadClient_new"></a>

### new ThreadClient(options)
Initializes a new client


| Param | Type | Description |
| --- | --- | --- |
| options | [<code>ThreadClientOptions</code>](#ThreadClientOptions) | Options to use |

<a name="ThreadClient+prefix"></a>

### threadClient.prefix : <code>string</code> \| <code>Array.&lt;string&gt;</code>
The client's prefix, can be a string or an array of prefixes

**Kind**: instance property of [<code>ThreadClient</code>](#ThreadClient)  
<a name="ThreadClient+login"></a>

### ~~threadClient.login()~~
***Deprecated***

Throws an error, use the [start](GhastlyClient#start) method instead

**Kind**: instance method of [<code>ThreadClient</code>](#ThreadClient)  
<a name="ThreadClientOptions"></a>

## ThreadClientOptions : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [prefix] | <code>string</code> \| <code>Array.&lt;string&gt;</code> | The prefix for the client |
| token | <code>string</code> | The client's token |


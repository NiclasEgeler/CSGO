<p align="center">
  <img  src="./logo.png" alt="Logo" width="130"/>
</p>

<h1 align="center"> Source API </h1>

<p align="center"> Query information from a running source based game server. </p>

## Introduction

Based on Valves [Source Server Queries](https://developer.valvesoftware.com/wiki/Server_queries) this Library allows you to query basic information from source servers.
</br>
The Server reponds to :
</br>
`A2S_INFO`
</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Basic information about the server.
</br>
`A2S_PLAYER`
</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Details about each player on the server.
</br>
`A2S_RULES` (broken since CSGO update 1.32.3.0 Feb 21, 2014)
</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The rules the server is using.

Required Flags to run:
</br>
`--allow-net`
</br>
`--unstable`

## Example usage

```typescript
import { getInfo, getPlayers } from "https://deno.land/x/csgo/mod.ts";

try {
  var info = await getInfo("192.168.0.123", 27015);
  var players = await getPlayers("192.168.0.123", 27015);
} catch (error) {
  console.log(error);
}
```

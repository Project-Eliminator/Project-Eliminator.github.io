---
title: FRP Erasing
description: FRP Erasing Guide for more devices
---

# Intro

::: warning Warning!
This is guide tested on **POCO X3 PRO (vayu)**. If you try it on another devices, it 
:::

## About FRP

**FRP (Factory Reset Protection)** — this is theft protection built into Android. After resetting the device to factory settings, the system requires you to enter the details of the Google account that was previously linked to it.

## Why remove FRP?
If you cannot set a lock screen password or install an APK, then removing FRP will help you. FRP can also be removed if you cannot complete the initial setup (this will not be possible on Chinese ROMs).

## Erasing FRP
### Method 1
It simplest method to erase FRP
- Download zip: [PixelDrain](https://pixeldrain.com/u/Az3qPebn) (credit [@xendr4x](https://t.me/xendr4x))
- Flash this zip in recovery

### Method 2
Erasing FRP via fastboot (works on many phones)
- Boot phone into fastboot
- On pc write: ```fastboot erase frp```
---
by [@xendr4x](https://t.me/xendr4x)  
4PDA: CynogenMODER
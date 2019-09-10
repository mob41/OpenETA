﻿# 去邊㗎 HeuiBin.ga (Go Where)
An interface to display city data using a simple map.

## Web Demo
The web interface is still in heavy development until it can allows plugins for development.
[https://www.go-where.ga/](https://www.go-where.ga/)

## Redirects
There are three domains that allows you to access GoWhere, all redirects back to https://www.go-where.ga:

- Chingish spelling (English with Hong Kong style) - https://www.go-where.ga/
- English spelling (with grammar) - https://www.gotowhere.ga/
- Cantonese spelling of <code>去邊㗎</code> - https://www.heuibin.ga/

## Old and new scripts
The project was renamed from OpenETA. Some files might still remain OpenETA names.

## Background
Most of the data in a city are discrete and difficult to compare with each other, such as bus ETA of companies in Hong Kong are totally separated and not centralized. It means that when you have to check for a cross-company route (e.g. 101, 107, 111), you have to check ETA from two apps of two companies! It wastes your time and messes up tourists to Hong Kong.

OpenETA is here to provide an interface for plugins to build up a platform to organize all city data together. Not only organizing ETA data, but also traffic, road congestion data or much more can be developed to pipe all data together.

## Features
As mentioned, OpenETA is **only an interface** which does not have any implementation for obtaining city data. Instead, OpenETA introduces a plugin system to allow plugins to pipe city data into the interface. It is done to minimize application size.

OpenETA contains a programming interface for plugin providing ETA to share their data in a same format, which allows to centralize and compare ETA data.

A large map is used instead of just using text to display city data. It is known that many people are confused where they are and where the stop is located. The map will be used to plot stops location and route paths into it.

Estimated Transit Location is introduced is show the estimated location of the transportation. It is done by comparing different ETA data of a route. This is still experimental.

## License
[tl;dr](https://tldrlegal.com/license/mit-license) The project is licensed under the MIT License.
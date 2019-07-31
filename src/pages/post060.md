---
title: "Import WordPress RSS Data into a Glide App."
id: "POST 060"
date: "2019-07-12"
---

As part of my experimentation with Glide Apps (and by extension Google Sheets), I asked myself whether I could bring RSS data into my app. After a cursory Google search, I found that this is possible and very easy. 

### IMPORTFEED. 

First off, Google Sheets makes it very easy to import RSS data (from any RSS feed) using the [IMPORTFEED](https://support.google.com/docs/answer/3093337?hl=en) formula.

I refer to the Google Sheets documentation which says that the format of the IMPORTFEED formula is as follows: 

`IMPORTFEED(url, [query], [headers], [num_items])`

### WordPress RSS. 

Self-hosted WordPress sites, by default, provide an RSS feed at the [/feed URL](https://wordpress.org/support/article/wordpress-feeds/). If we were to use the [official WordPress blog](https://wordpress.org/news/) itself as an example you could find the RSS feed at: 

`https://wordpress.org/news/feed/`

Based on the IMPORTFEED documentation, I want to request the following: 

* url will be https://wordpress.org/news/feed/
* query will not be supplied since I am just looking to get the basic feed
* headers will be set to TRUE since I want the headers to populated as the title row in the spreadsheet
* num_items will be set to 5 since this is an example and I only want to bring in a few items as a test. 

With that in mind, as a test, we can create a "News" tab in our Google Sheet. Then in the first cell add the following: 

`=IMPORTFEED("https://wordpress.org/news/feed/",,TRUE,5)`

If all is well, you will receive data populated into your Google Sheet! 

From there, you can setup your page as is typical in Glide. 




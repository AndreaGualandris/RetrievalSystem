import scrapy

class MySpider(scrapy.Spider):
    name = 'ApartmentsComSpider'
    start_urls = ["https://www.apartments.com/chicago-il/"]
    i=1

    def parse(self, response):
        self.i+=1
        # for houses in response.css(".placard.placard-option-diamond.has-header.js-diamond"):
        for h in response.css(".placardContainer"):
            for houses in h.css(".mortar-wrapper"):

                print(houses.css(".js-placardTitle.title::text").get())
                if houses.css(".js-placardTitle.title::text").get() != None:
                    yield {
                        'title': houses.css(".js-placardTitle.title::text").get(),
                        'address': houses.css(".property-address.js-url::text").get(),
                        'prize': houses.css('.property-pricing::text').get(),
                        'beds': houses.css('.property-beds::text').get(),
                        'urlImage': houses.css('div.carouselInner .item.active::attr(style)').get(),
                        'urlHouse': houses.css('.placard.placard-option-diamond.has-header.js-diamond::attr(data-url)').get()
                        
                    }

        next_page = response.urljoin("https://www.apartments.com/chicago-il/" + str(self.i))

        #    next_page = "https://www.apartments.com/chicago-il/" + str(i) + "/"
        if next_page is not None and self.i < 28:
            yield response.follow(next_page)
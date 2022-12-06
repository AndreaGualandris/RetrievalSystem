import scrapy

class MySpider(scrapy.Spider):
    name = 'ApartmentsComSpider'
    start_urls = ["https://www.apartments.com/joliet-il/"]
    i=1

    def parse(self, response):
        self.i+=1
        for h in response.css(".placardContainer"):
            for houses in h.css(".mortar-wrapper"):
                if houses.css(".js-placardTitle.title::text").get() != None:

                    # NEW CODE
                    urlImage = houses.css('div.carouselInner .item.active::attr(style)').get()
                    if urlImage == None: # per gli altri dopo i primi 4
                        urlImage = houses.css('div.carouselInner .item.active::attr(data-image)').get()
                    if 'background-image: url(\"' in urlImage: # parsing urlImage per pulirlo
                        urlImage = urlImage.replace('background-image: url(\"', '').replace('\");', '')

                    yield {
                        'title': houses.css(".js-placardTitle.title::text").get(),
                        'address': houses.css(".property-address.js-url::text").get(),
                        'price': houses.css('.property-pricing::text').get(),
                        'beds': houses.css('.property-beds::text').get(),
                        'urlImage': urlImage,
                        'urlHouse': houses.css('a.property-link::attr(href)').get(), # aurora 
                        # 'urlHouse': houses.css('.placard.placard-option-diamond.has-header.js-diamond::attr(data-url)').get(), # chicago

                    }
        next_page = response.urljoin("https://www.apartments.com/chicago-il/" + str(self.i))

        if next_page is not None and self.i < 28:
            yield response.follow(next_page)
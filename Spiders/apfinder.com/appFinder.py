#scrape link https://www.apartmentfinder.com/Short-Term-Housing/Illinois/Chicago
# list of apartaments layout-row layout-wrap

import scrapy
from scrapy.selector import Selector

class SpiderApartamentFinder(scrapy.Spider):
    name = "ApartamentFinderSpider"
    start_urls = ["https://www.apartmentfinder.com/Short-Term-Housing/Illinois/Chicago"]
    i=1

    def parse(self, response):
        self.i+=1
        for h in response.css("#listingContainer ol"):
            # for houses in h.css(".infoContainer.propertyInfo.layout-row.layout-wrap.layout-align-space-between-stretch.layout-align-gt-xs-start-stretch"):
            # for houses in h.css("div.imageContainer.media"):   
            # if h.css(".level5.layout-row.layout-wrap.adLevel5"):
            #     for houses in h.css(".level5.layout-row.layout-wrap.adLevel5"):
            #         yield {
            #             # "name": houses.css(".infoContainer.propertyInfo.layout-row.layout-wrap.layout-align-space-between-stretch.layout-align-gt-xs-start-stretch h3 a::text").get(),
            #             "title": houses.css(".flex-12.ellipses.layout-hidden-xs.desktop-title span::text").get().strip(),
            #             "address": houses.css(".flex-12.address.ellipses::text").get().strip(),
            #             "price": houses.css(".altRentDisplay.layout-hidden-xs::text").get().strip(),
            #             "beds": houses.css(".unitLabel::text").get().strip(),
            #             "urlImage": houses.css(".carouselInner div::attr(data-image-url)").get()
            #         }
            # elif (h.css(".level6.layout-row.layout-wrap.adLevel6")):
            #     for houses in h.css(".level6.layout-row.layout-wrap.adLevel6"):
            #         yield {
            #             # "name": houses.css(".infoContainer.propertyInfo.layout-row.layout-wrap.layout-align-space-between-stretch.layout-align-gt-xs-start-stretch h3 a::text").get(),
            #             "title": houses.css(".flex-12.ellipses.layout-hidden-xs.desktop-title span::text").get().strip(),
            #             "address": houses.css(".flex-12.address.ellipses::text").get().strip(),
            #             "price": houses.css(".altRentDisplay.layout-hidden-xs::text").get().strip(),
            #             "beds": houses.css(".unitLabel::text").get().strip(),
            #             "urlImage": houses.css(".carouselInner div::attr(data-image-url)").get()
            #         }
            for houses in h.css("li article"):
                yield {
                        # "name": houses.css(".infoContainer.propertyInfo.layout-row.layout-wrap.layout-align-space-between-stretch.layout-align-gt-xs-start-stretch h3 a::text").get(),
                        "title": houses.css(".flex-12.ellipses.layout-hidden-xs.desktop-title span::text").get().strip(),
                        "address": houses.css(".flex-12.address.ellipses::text").get().strip(),
                        "price": houses.css(".altRentDisplay.layout-hidden-xs::text").get().strip(),
                        "beds": houses.css(".unitLabel::text").get().strip(),
                        # "urlImage": houses.css(".carouselInner div::attr(data-image-url)").get()
                    }

            

        next_page = response.urljoin("https://www.apartmentfinder.com/Short-Term-Housing/Illinois/Chicago/Page" + str(self.i))
        if next_page is not None and self.i<=20:
            yield response.follow(next_page, self.parse)
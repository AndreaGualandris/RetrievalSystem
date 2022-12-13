#scrape link https://www.apartmentfinder.com/Illinois/Chicago
# list of apartaments layout-row layout-wrap


# flex-12 ellipses layout-hidden-xs desktop-title a::attr(href)      url pagina casa

import scrapy
from scrapy.selector import Selector

class SpiderApartamentFinder(scrapy.Spider):
    name = "ApartamentFinderSpider"
    # start_urls = ["https://www.apartmentfinder.com/Illinois/"]
    # start_urls = ["https://www.apartmentfinder.com/Indiana/"]
    start_urls = ["https://www.apartmentfinder.com/Michigan/"]


    i=1

    def parse(self, response):
        self.i+=1
        for h in response.css("#listingContainer ol"):
            for houses in h.css("li article"):

                price = houses.css(".altRentDisplay.layout-hidden-xs::text").get().strip()
                price = price.split('-', 1)[0].strip()
                if '$' in price:
                    price = price.replace('$', '')
                if ',' in price:
                    price = price.replace(',', '')

                address = houses.css(".flex-12.address.ellipses::text").get().strip()
                address_arr = address.split(',')
                if len(address_arr) == 3:
                    city = address_arr[1].strip()
                    state = address_arr[2].split()[0]
                else: # no street address
                    city = address_arr[0].strip()
                    state = address_arr[1].split()[0]

                beds = houses.css(".unitLabel::text").get().strip()
                beds = beds.split('-', 1)[0].strip()
                if 'Beds' in beds:
                    beds = beds.replace('Beds', '')
                if 'Bed' in beds:
                    beds = beds.replace('Bed', '')
                beds = beds.strip()
                yield {
                        "state": state,
                        "city": city,
                        "title": houses.css(".flex-12.ellipses.layout-hidden-xs.desktop-title span::text").get().strip(),
                        "address": houses.css(".flex-12.address.ellipses::text").get().strip(),
                        "price": price,
                        "beds": beds,
                        "urlImage": houses.css(".carouselInner div::attr(data-image-url)").get(),
                        "urlHouse": houses.css(".flex-12.ellipses.layout-hidden-xs.desktop-title a::attr(href)").get()
                    }

            

        next_page = response.urljoin(self.start_urls[0] + "Page" + str(self.i))
        if next_page is not None and self.i<=20:
            yield response.follow(next_page, self.parse)
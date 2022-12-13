import requests
import scrapy
from scrapy.selector import Selector

class RentCafeSpider(scrapy.Spider):
    name = 'RentCafeSpider'
    # start_urls = ["https://www.rentcafe.com/apartments-for-rent/us/il/"]
    # start_urls = ["https://www.rentcafe.com/apartments-for-rent/us/in/"]
    start_urls = ["https://www.rentcafe.com/apartments-for-rent/us/mi/"]
   
    def parse(self, response):
        # get the price of the apartment

        # SENZA CICLO FOR E USANDO GET ALL HO TUTTE LE COSE DELLA PAGINA sotto forma di array
        for h in response.css('.listings'):
            for houseInfos in h.css(".listing-details"):

                min_price = houseInfos.css('li.data-rent:nth-child(1)::text').get()
                max_price = houseInfos.css('li.data-rent:nth-child(2)::text').get()
                # filtering
                if None == min_price:
                    if None == max_price:
                        price = 'Ask for pricing'
                    else:
                        price = str(max_price)
                else:
                    if None == max_price:
                        price = str(min_price)
                    else:
                        price = str(min_price)
                if "$" in price:
                    price = price.replace("$", '')
                if "+" in price:
                    price = price.replace("+", '')
                if "," in price:
                    price = price.replace(",", '')

                streetAddress = houseInfos.css(".listing-address.building-address span:nth-child(1)::text").get()
                addressLocality = houseInfos.css(".listing-address.building-address span:nth-child(2)::text").get()
                addressRegion = houseInfos.css(".listing-address.building-address span:nth-child(3)::text").get()
                postalCode = houseInfos.css(".listing-address.building-address span:nth-child(4)::text").get()
                address = str(streetAddress) + ", " + str(addressLocality) + ", " + str(addressRegion) + ", " + str(postalCode)

                # get the number of bedrooms
                min_bed = houseInfos.css(".listing-beds .data-beds:nth-child(2)::text").get()
                max_bed = houseInfos.css(".listing-beds .data-beds:nth-child(3)::text").get()
                # filtering
                if None == min_bed:
                    if None == max_bed:
                        beds = str(0)
                    else:
                        beds = str(max_bed)
                else:
                    if None == max_bed:
                        beds = str(min_bed)
                    else:
                        beds = str(min_bed)
                if "BEDS" in beds:
                    beds = beds.replace("BEDS", '')
                if "BED" in beds:
                    beds = beds.replace("BED", '')
                beds = beds.strip()

                urlImage = response.css('.listing-presentation .listing-presentation-extra-photos.row.map-hide img::attr(data-src)').get()

                if urlImage == None:
                    urlImage = response.css('.listing-presentation .lazy.lazyload.cursor-pointer::attr(data-src)').get()
                

                yield {
                    "state": addressRegion,
                    "city": addressLocality,
                    'title': houseInfos.css('.listing-name.building-name a::text').get(),
                    'address': address,
                    'price': price,
                    'beds': beds,
                    'urlImage': urlImage,                  
                    'urlHouse': houseInfos.css('.listing-action-bar a::attr(href)').get()
                }


        # next at the end of the page
        # id_page += 1
        # next_page = "https://www.apartments.com/chicago-il/${id_page}/"
        # if next_page is not None:
        #     yield response.follow(next_page, callback=self.parse)
        #     # yield scrapy.Request(next_page, callback=self.parse)
        # next_page = response.css('pagination.justify-content-center:nth-child(2)::attr(href)').get()
        next_page = response.css(".pagination li:nth-child(3) a::attr(href)").get()
        if next_page is not None:
            yield response.follow(next_page, self.parse)
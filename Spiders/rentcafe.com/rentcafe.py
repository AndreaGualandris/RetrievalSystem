import requests
import scrapy
from scrapy.selector import Selector

class RentCafeSpider(scrapy.Spider):
    name = 'RentCafeSpider'
    start_urls = ["https://www.rentcafe.com/apartments-for-rent/us/il/chicago/"]
    # def start_requests(self):
    #     urls = []
    #     for i in range(1,28):
    #         if i == 1:
    #             urls.append("https://www.apartments.com/chicago-il/")
    #         else:
    #             urls.append("https://www.apartments.com/chicago-il/" + str(i))

    #     for url in urls:
    #         yield scrapy.Request(url=url, callback=self.parse)
   
    def parse(self, response):
        # get the prize of the apartment

        # SENZA CICLO FOR E USANDO GET ALL HO TUTTE LE COSE DELLA PAGINA sotto forma di array
        for h in response.css('.listings'):
            for houseInfos in h.css(".listing-details"):

                min_prize = houseInfos.css('li.data-rent:nth-child(1)::text').get()
                max_prize = houseInfos.css('li.data-rent:nth-child(2)::text').get()
                prize = str(min_prize) + " - " + str(max_prize)

                streetAddress = houseInfos.css(".listing-address.building-address span:nth-child(1)::text").get()
                addressLocality = houseInfos.css(".listing-address.building-address span:nth-child(2)::text").get()
                addressRegion = houseInfos.css(".listing-address.building-address span:nth-child(3)::text").get()
                postalCode = houseInfos.css(".listing-address.building-address span:nth-child(4)::text").get()
                address = str(streetAddress) + ", " + str(addressLocality) + ", " + str(addressRegion) + ", " + str(postalCode)

                # get the number of bedrooms
                min_bed = houseInfos.css(".listing-beds .data-beds:nth-child(2)::text").get()
                max_bed = houseInfos.css(".listing-beds .data-beds:nth-child(3)::text").get()
                beds = str(min_bed) + "-" + str(max_bed)

                yield {
                    'title': houseInfos.css('.listing-name.building-name a::text').get(),
                    'address': address,
                    'prize': prize,
                    'beds': beds
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
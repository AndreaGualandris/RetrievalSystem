import scrapy

class MySpider(scrapy.Spider):
    name = 'ApartmentsComSpider'
    start_urls = ["https://www.apartments.com/il/"]
    # start_urls = ["https://www.apartments.com/in/"]
    # start_urls = ["https://www.apartments.com/mi/"]
    i=1

    def parse(self, response):
        self.i+=1
        for h in response.css(".placardContainer"):
            for houses in h.css(".mortar-wrapper"):
                if houses.css(".js-placardTitle.title::text").get() != None:

                    urlImage = houses.css('div.carouselInner .item.active::attr(style)').get()
                    if urlImage == None: # per gli altri dopo i primi 4
                        urlImage = houses.css('div.carouselInner .item.active::attr(data-image)').get()
                    if 'background-image: url(\"' in urlImage: # parsing urlImage per pulirlo
                        urlImage = urlImage.replace('background-image: url(\"', '').replace('\");', '')
                    
                    price = houses.css('.property-pricing::text').get()
                    price = price.split('-', 1)[0].strip()
                    if '$' in price:
                        price = price.replace('$', '')
                    if ',' in price:
                        price = price.replace(',', '')

                    address = houses.css(".property-address.js-url::text").get()
                    address_arr = address.split(',')
                    if len(address_arr) == 3:
                        city = address_arr[1].strip()
                        state = address_arr[2].split()[0]
                    else: # no street address
                        city = address_arr[0].strip()
                        state = address_arr[1].split()[0]

                    beds = houses.css('.property-beds::text').get()
                    beds = beds.split('-', 1)[0].strip()
                    if 'Beds' in beds:
                        beds = beds.replace('Beds', '')
                    if 'Bed' in beds:
                        beds = beds.replace('Bed', '')
                    beds = beds.strip()

                    yield {
                        'state': state,
                        'city': city,
                        'title': houses.css(".js-placardTitle.title::text").get(),
                        'address': address,
                        'price': price,
                        'beds': beds,
                        'urlImage': urlImage,
                        'urlHouse': houses.css('a.property-link::attr(href)').get(), 
                        
                    }
        next_page = response.urljoin(self.start_urls[0] + str(self.i))

        if next_page is not None and self.i < 28:
            yield response.follow(next_page)
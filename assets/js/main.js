//Product-name	Compagny	Price	Product-picture	Link-shop
let liste_csv =
    `Kanken Art Laptop 15" Special Edition Backpack	Fjallraven	$119.00	01.png	https://amzn.to/32MmHgL
Swing Arm Wood Desk Lamp	Tomons	$36.00	d2.png	https://amzn.to/2WX7vtD
Hajo Backpack	Ucon Acrobatics	$89.00	u6.png	https://amzn.to/2I3WvXM
Zed Bamboo Longboard	Retrospec	$60.00	u10.png	https://amzn.to/2YX3043
Electric Pour-Over Kettle	Fellow	$149.00	u9.png	https://amzn.to/2KfP3ee
Woodie Vintage Car	Candylab Toys	$35.00	h17.png	https://amzn.to/2FYB3zT
Logo Modernism	Taschen	$60.00	c3.png	https://www.bookdepository.com/Logo-Modernism-Jens-Muller-R-Roger-Remington/9783836545303/?a_aid=1991
Dieter Rams: As Little Design as Possible	Sophie Lovell	$150.00	d7.png	https://amzn.to/2YQLnCV
The Eye	Nathan Williams	$28.00	c6.png	https://amzn.to/2I3lbQ7
Gather Desk Organizer	Ugmonk	$149.00	h13.png	https://amzn.to/2IifSvA
Dipped Canteen	Corkcicle.	$28.00	h8.png	https://amzn.to/2G84CiT
Sayl Office Chair White	Herman Miller	$599.00	h2.png	https://amzn.to/2YWPz3N
Three Cherry Wood Notebook	Field Notes	$13.00	d5.png	https://amzn.to/2KhwTsz
From Japan	Counter Print	$16.00	c5.png	https://www.bookdepository.com/From-Japan/9780957081659?a_aid=1991
Arigato Desk Lamp	Grupa	$380.00	h6.png	http://www.grupaproducts.com/arigato/
Winston Regal Watch	Komono	$58.00	u7.png	https://amzn.to/2CZiPxO
Letter H Poster	Hey Studio	$45.00	d4.png	https://heyshop.es/collections/home/products/h-hey
Coffee Can	Blue Bottle Company	$11.00	u11.png	https://amzn.to/2UGLHEQ
Beoplay H4	Bang & Olufsen	$160.00	h9.png	https://amzn.to/2UFjEWp
Make It Now	Anthony Burrill	$22.00	p2.png	https://amzn.to/2OTHEQg
Black Side Chair	Eames Style	$54.00	h4.png	https://amzn.to/2UFHfGt
Min: The New Simplicity in Graphic Design	Thames & Hudson	$28.00	c22.png	https://amzn.to/2Ij1IKA
Grid systems in graphic design	Josef Müller-Brockmann	$42.00	c1.png	https://amzn.to/2UxtLww
Card Wallet	Herschel	$15.00	u12.png	https://amzn.to/2I5vxiq
Classic Advice Print Black	Good Fucking Design Advice	$30.00	p3.png	https://goodfuckingdesignadvice.com/products/classic-advice-print
Magic Mouse 2	Apple	$92.00	life-15.png	https://amzn.to/2D3yZWX
Travel Tumbler	Kinto	$34.00	life-17.png	https://amzn.to/2WTbsPL
Magic Keyboard	Apple	$139.00	life-16.png	https://amzn.to/2GbCf4A
Bottle Grinder	Menu	$75.00	u8.png	https://amzn.to/2WMJbdy
Geo Thermos	Normann Copenhagen	$62.00	home-8.png	https://amzn.to/2JLtxvk
Womb Chair & Ottoman	Kardiel	$799.00	home-10.png	https://amzn.to/2YdSBPy
Water Filter Glass Carafe	Soma	$30.00	home-9.png	https://amzn.to/2LCEfGP`;

let list = [];
let x = liste_csv
    .split("\n")
    .forEach(
        e => {
            let ea = e.split("\t");

            list.push({
                product_name: ea[0],
                company: ea[1],
                price: ea[2],
                picture: ea[3],
                link: ea[4]
            })
        })

let html = "";

list.forEach((element, index) => {
    html = html +

        `<div class="product ` + (index % 7 == 0 ? "hero" : "") + `">
    <a href="`+ element.link + `">
        <img src="./assets/img/`+ element.picture + `" alt="Bild: ` + element.product_name + `">
    </a>
    <div class="product_info">
        <p class="product_name">` + element.product_name + `</p>
        <p class="price">` + element.price + `</p>
        <p class="company">` + element.company + `</p>
    </div>
</div>`;

});

document.read
document.getElementById("products").innerHTML = html.replace('\n', '');
// console.log(html);
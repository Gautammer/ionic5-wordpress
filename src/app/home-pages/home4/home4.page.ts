import { Component, OnInit, Input } from "@angular/core";
import { ConfigService } from "src/providers/config/config.service";
import { NavController } from "@ionic/angular";
import { SharedDataService } from "src/providers/shared-data/shared-data.service";

@Component({
  selector: "app-home4",
  templateUrl: "./home4.page.html",
  styleUrls: ["./home4.page.scss"],
})
export class Home4Page implements OnInit {
  @Input("data") p; //product data
  @Input("type") type;
  sliderConfig = {
    slidesPerView: this.config.productSlidesPerPage,
    spaceBetween: 0,
  };
  pro_data_one: any;
  Cat_: any;
  Cat_Two: any;
  mens_products: any;
  Mobiles_products: any;
  constructor(
    public nav: NavController,
    public config: ConfigService,
    public shared: SharedDataService
  ) {
    // console.log(shared);

    // this.pro_data_one = [
    //   {
    //     image: shared.tab1[0].images[0].src,
    //     name: shared.tab1[0].name,
    //     id: shared.tab1[0].id,
    //   },
    //   {
    //     image: shared.tab1[1].images[0].src,
    //     name: shared.tab1[1].name,
    //     id: shared.tab1[1].id,
    //   },
    // ];

    let query = "&cat_id=182";
    this.config
      .getWithUrl(
        this.config.url +
          "/api/appsettings/ionic_filter_products/?insecure=cool" +
          query
      )
      .then((data: any) => {
        console.log(data);
        console.log(data.data);
        let rep = data.data.slice(1, -1);
        console.log(rep);
        let len = rep;
        console.log(data.data);
        this.config
          .getWithUrl(
            this.config.url +
              "/wp-json/wc/v3/products?include=" +
              len +
              "&status=publish&order=desc&order_by=date&lang=en&currency=USD&consumer_key=ck_da762414692a236c5db518a709f9335f81d88cde&consumer_secret=cs_4bd7359157697a8356c86597164a6faa7434ff98"
          )
          .then((data: any) => {
            this.mens_products = data;
            console.log(JSON.stringify(this.mens_products));
          });
      });

    let query2 = "&cat_id=64";
    this.config
      .getWithUrl(
        this.config.url +
          "/api/appsettings/ionic_filter_products/?insecure=cool" +
          query2
      )
      .then((data: any) => {
        console.log(data);
        console.log(data.data);
        let rep = data.data.slice(1, -1);
        console.log(rep);
        let len = rep;
        console.log(data.data);
        this.config
          .getWithUrl(
            this.config.url +
              "/wp-json/wc/v3/products?include=" +
              len +
              "&status=publish&order=desc&order_by=date&lang=en&currency=USD&consumer_key=ck_da762414692a236c5db518a709f9335f81d88cde&consumer_secret=cs_4bd7359157697a8356c86597164a6faa7434ff98"
          )
          .then((data: any) => {
            this.Mobiles_products = data;
            console.log(JSON.stringify(this.Mobiles_products));
          });
      });

    this.Cat_ = [
      {
        image: shared.tab1[0].images[0].src,
        name: shared.tab1[0].name,
        id: shared.tab1[0].id,
      },
      {
        image: shared.tab1[1].images[0].src,
        name: shared.tab1[1].name,
        id: shared.tab1[1].id,
      },
      // {
      //   image: shared.categories[0].image.src,
      //   name: shared.categories[0].name,
      //   id: shared.categories[0].id,
      // },
      // {
      //   image: shared.categories[1].image.src,
      //   name: shared.categories[1].name,
      //   id: shared.categories[1].id,
      // },
      // {
      //   image: shared.categories[2].image.src,
      //   name: shared.categories[2].name,
      //   id: shared.categories[2].id,
      // },
      // {
      //   image: shared.categories[3].image.src,
      //   name: shared.categories[3].name,
      //   id: shared.categories[3].id,
      // },
      // {
      //   image: shared.categories[4].image.src,
      //   name: shared.categories[4].name,
      //   id: shared.categories[4].id,
      // },
      // {
      //   image: shared.categories[5].image.src,
      //   name: shared.categories[5].name,
      //   id: shared.categories[5].id,
      // },
    ];

    // this.Cat_Two = [
    //   {
    //     image: shared.categories[6].image.src,
    //     name: shared.categories[6].name,
    //     id: shared.categories[6].id,
    //   },
    //   {
    //     image: shared.categories[7].image.src,
    //     name: shared.categories[7].name,
    //     id: shared.categories[7].id,
    //   },
    //   {
    //     image: shared.categories[8].image.src,
    //     name: shared.categories[8].name,
    //     id: shared.categories[8].id,
    //   },
    //   {
    //     image: shared.categories[9].image.src,
    //     name: shared.categories[9].name,
    //     id: shared.categories[9].id,
    //   },
    // ];
    console.log(JSON.stringify(this.Cat_Two));

    // shared.categories
  }

  ionViewDidEnter() {
    this.shared.hideSplashScreen();
  }
  ionViewWillEnter() {
    this.config.setCardStyle("9");
  }
  openSubCategories(parent) {
    let count = 0;
    for (let value of this.shared.allCategories) {
      console.log();
      if (value.parent == parent.id) {
        count++;
        console.log(value);
      }
    }
    if (count != 0)
      this.nav.navigateForward(
        this.config.currentRoute +
          "/categories/" +
          parent.id +
          "/" +
          parent.name
      );
    else
      this.nav.navigateForward(
        this.config.currentRoute +
          "/products/" +
          parent.id +
          "/" +
          parent.name +
          "/newest"
      );
  }

  showProductDetail(n) {
    this.shared.singleProductPageData.push(n);
    this.nav.navigateForward(
      this.config.currentRoute + "/product-detail/" + n.id
    );

    if (this.type != "recent") {
      this.shared.addToRecent(this.p);
    }
  }

  openProducts(value) {
    this.nav.navigateForward("/products/0/0/" + value);
  }
  ngOnInit() {}
}

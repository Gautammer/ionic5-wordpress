import { Component, OnInit, Input } from "@angular/core";
import { ConfigService } from "src/providers/config/config.service";
import { NavController } from "@ionic/angular";
import { SharedDataService } from "src/providers/shared-data/shared-data.service";
import { ActivatedRoute, Router } from "@angular/router";

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
  NewCat_products: any;
  newCatShow = false;
  womens_products: any;
  kids_products: any;
  constructor(
    public nav: NavController,
    public config: ConfigService,
    public shared: SharedDataService,
    public router: Router,
    private activatedRoute: ActivatedRoute
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

    let query3 = "&cat_id=315";
    this.config
      .getWithUrl(
        this.config.url +
          "/api/appsettings/ionic_filter_products/?insecure=cool" +
          query3
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
            this.kids_products = data;
            // console.log(JSON.stringify(this.Mobiles_products));
          });
      });

    let query4 = "&cat_id=243";
    this.config
      .getWithUrl(
        this.config.url +
          "/api/appsettings/ionic_filter_products/?insecure=cool" +
          query4
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
            this.womens_products = data;
            // console.log(JSON.stringify(this.womens_products));
          });
      });

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

  openProducts(id, name) {
    console.log("Looong");

    let count = 0;
    for (let val of this.shared.allCategories) {
      if (val.parent == id) {
        count++;
      }
    }
    if (count == 0) {
      this.router.navigateByUrl(
        "/tabs/categories/products/" + id + "/" + name + "/newest"
      );
    } else {
      this.router.navigateByUrl(
        "/tabs/categories/categories/" + id + "/" + name
      );
    }

    // let query2 = "&cat_id=" + id;
    // this.config
    //   .getWithUrl(
    //     this.config.url +
    //       "/api/appsettings/ionic_filter_products/?insecure=cool" +
    //       query2
    //   )
    //   .then((data: any) => {
    //     console.log(data);
    //     console.log(data.data);
    //     let rep = data.data.slice(1, -1);
    //     console.log(rep);
    //     let len = rep;
    //     console.log(data.data);
    //     this.config
    //       .getWithUrl(
    //         this.config.url +
    //           "/wp-json/wc/v3/products?include=" +
    //           len +
    //           "&status=publish&order=desc&order_by=date&lang=en&currency=USD&consumer_key=ck_da762414692a236c5db518a709f9335f81d88cde&consumer_secret=cs_4bd7359157697a8356c86597164a6faa7434ff98"
    //       )
    //       .then((data: any) => {
    //         this.NewCat_products = data;
    //         this.newCatShow = true;
    //         console.log(JSON.stringify(this.NewCat_products));
    //       });
    //   });

    // this.nav.navigateForward("/products/0/0/" + value);
    // this.router.navigateByUrl(
    //   this.config.currentRoute + "/categories/" + id + "/" + name
    // );
  }

  CloseCl() {
    this.newCatShow = false;
  }
  ngOnInit() {}
}

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Storage } from "@ionic/storage";
@Component({
  selector: "app-post-details",
  templateUrl: "./post-details.page.html",
  styleUrls: ["./post-details.page.scss"],
})
export class PostDetailsPage implements OnInit {
  data;
  url: string = "https://prityshop.com/";
  id: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public http: HttpClient,
    private storage: Storage
  ) {
    // let id = this.route.snapshot.paramMap.get("postId");

    this.id = JSON.parse(localStorage.getItem("postId"));

    storage.get("postId").then((val) => {
      this.id = JSON.parse(val);
    });

    // let special = this.route.snapshot.paramMap.get("queryParams");

    console.log(JSON.stringify(this.id));

    this.getPostDetails(this.id).subscribe((res) => {
      this.data = res;
    });
  }

  getPostDetails(id) {
    const route = this.url + "wp-json/wp/v2/" + `posts/${id}?_embed`;
    return this.http.get(route).pipe(
      map((post) => {
        // post["media_url"] =
        //   post["_embedded"]["wp:featuredmedia"][0]["media_details"].sizes[
        //     "medium"
        //   ].source_url;
        console.log(post);
        return post;
      })
    );
  }

  ngOnInit() {}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection2',
  templateUrl: './collection2.component.html',
  styleUrls: ['./collection2.component.scss']
})
export class Collection2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  collection1:any = ["https://i.pinimg.com/originals/a7/3d/6e/a73d6e4ac85c6a822841e449b24c78e1.jpg",
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/1200px-Altja_j%C3%B5gi_Lahemaal.jpg",
      "https://images.pexels.com/photos/414102/pexels-photo-414102.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://m.media-amazon.com/images/I/8192Yt4zAfL._SL1500_.jpg",
      "https://media.springernature.com/full/springer-cms/rest/v1/img/18893370/v1/height/320",
      "https://images.unsplash.com/photo-1610878180933-123728745d22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FuYWRhJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      "https://webneel.com/daily/sites/default/files/images/daily/08-2018/1-nature-photography-spring-season-mumtazshamsee.jpg"
  ]


}

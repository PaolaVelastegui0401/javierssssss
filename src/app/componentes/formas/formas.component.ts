import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formas',
  templateUrl: './formas.component.html',
  styleUrls: ['./formas.component.css']
})
export class FormasComponent implements OnInit {
  figura = 'Circulo';

  constructor() { }

  ngOnInit(): void {
  }

}

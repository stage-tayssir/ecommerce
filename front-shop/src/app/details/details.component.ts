import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute,
    private api:ServiceService) { }
    c = {id : -1,
      marque : '',
      modele :'',
      annee :0,
      img:'',
      fich : [
        {
          cylindre : '',
          puissance: '',
          boite:'',
          desc:'',
          energie:'',
          nb_place:0,
          nb_door:0

        }
      ]
    }
  ngOnInit() {
    const id=this.route.snapshot.params['id'];
    this.loadinfo(id);
  }

  loadinfo(id){
    this.api.getOneCar(id).subscribe(
      data => {
        this.c=data;
      },
      error =>{
          console.log(error);
      }
      );
  }




}

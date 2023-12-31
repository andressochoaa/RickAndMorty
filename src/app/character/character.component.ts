import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {
  id: number;
  personaje: any = {};
  load: boolean;

  constructor(private _apiService: ApiService, private actRoute: ActivatedRoute){
    this.id = parseInt(this.actRoute.snapshot.paramMap.get('id')!);
    this.load = false;
  }

  ngOnInit(): void{
    this.obtenerPersonaje(this.id);
  }

  obtenerPersonaje(id: number){
    this._apiService.getPersonaje(this.id).subscribe(data => {
      this.personaje = data;
      this.load = true;
      console.log(this.personaje);
    })
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'app';
  constructor(private http: HttpClient) { }
  mensagem:any[]=[];
  id={};
  url="http://localhost:3000/mensagem"
  getmensagem() {
  return this.http.get(this.url);
}
  ngOnInit(){
    this.getmensagem().subscribe(
      (data:any) => {
        this.mensagem = data.reverse();

      }
    );
    console.log(this.mensagem);
    console.log(this.id);
  }
}

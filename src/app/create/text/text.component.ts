import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/home.service';
import { SCreateService } from 'src/app/s-create.service';
import { SWikiService } from 'src/app/s-wiki.service';
import { Wiki } from 'src/app/wiki';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
 showAlert= false;

  constructor(private datosWiki: SWikiService, private router: Router, private sHome: HomeService, private sCreate: SCreateService, private formBuilder: FormBuilder) {
    this.sHome.loadScript();
  }

  saveForm = new FormGroup({
    titulo: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(60)]),
    imagen: new FormControl(''),
    categoria: new FormControl('', [Validators.required, Validators.minLength(4)]),
    indice: new FormControl(''),
    preambulo: new FormControl(''),
    contenido: new FormControl('', [Validators.required, Validators.minLength(40)]),
    info_general: new FormControl(''),
  });

  ngOnInit(): void {

  }
  home() {
    this.router.navigate(['']);
  }
  aceptar(){
    this.router.navigate(['']);

  }

  postForm(form: Wiki) {
    this.datosWiki.save(form).subscribe(data => {
      this.showAlert=true;
      console.log(this.saveForm.value);
    })
  }
}



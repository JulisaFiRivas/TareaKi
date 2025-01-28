import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CookieService } from '../../../services/cookie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cookie-form',
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatButton, MatCardModule, CommonModule],
  templateUrl: './cookie-form.component.html',
  styleUrl: './cookie-form.component.css'
})
export class CookieFormComponent {
  private cookieService = inject (CookieService);
  private fb = inject(FormBuilder);
  public router = inject (Router);
  private route= inject (ActivatedRoute);
  private snackBar= inject (MatSnackBar);

  cookieForm : FormGroup;
  isEditMode: boolean = false;

  constructor(){
    this.cookieForm = this.fb.group({
      id: [null],
      nombre: ['', [Validators.required, Validators.maxLength(20)]],
      descripcion: ['', [Validators.required, Validators.maxLength(1000)]]
    });

    this.route.params.subscribe((params)=> {
      if (params['id']){
        this.isEditMode = true;
        this.cargarProductos(params['id']);
      }
    });

  }

  private cargarProductos(id:number){
    this.cookieService.getCookieById(id).subscribe({
      next:(cookie) => {
        this.cookieForm.patchValue(cookie)
      },
      error:(err) => {
        console.error(err)
      }
    });
  }

  onSubmit(){
    if(this.cookieForm.invalid) return;

    const cookieData = {...this.cookieForm}.value;
    if(this.isEditMode){
      this.cookieService.updateCookie(cookieData.id, cookieData).subscribe({
        next: () => {
          this.snackBar.open('Cookie actualizada con exito!', 'Cerrar', {
            duration: 3000,
          });
          this.router.navigate(['/cookies/list']);
        },
        error: (err) => console.error(err),
      });
    }else{
      delete cookieData.id;
       this.cookieService.createCookie(cookieData).subscribe({
         next: () => {
           this.snackBar.open('Cookie agregada con exito!', 'Cerrar', {
             duration: 3000,
           });
           this.router.navigate(['/cookies/list']);
         },
         error: (err) => console.error(err),
        });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FavoriteImageService } from '../favorite-image.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.css']
})
export class AddImageComponent implements OnInit {

  imageForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private FavoriteImageService: FavoriteImageService, private router: Router) {
    this.imageForm = this.formBuilder.group({
      imageUrl: ['', Validators.required],
      title: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.imageForm.valid) {
      // ทำการ submit ข้อมูล
      console.log(this.imageForm.value);
      this.FavoriteImageService.addImage(this.imageForm.value)
        .subscribe(() => {
          console.log('Image added successfully');
          this.imageForm.reset();
          this.router.navigate(['/']);
        });
      
      // ส่วนนี้คุณสามารถเรียก API สำหรับบันทึกข้อมูลภาพได้ตามต้องการ
    } else {
      // กรณีฟอร์มไม่ถูกต้องหรือไม่สมบูรณ์
      alert('Please fill out all required fields.');
    }
  }

  onCancel(): void {
    console.log('Cancelled');
  }


}

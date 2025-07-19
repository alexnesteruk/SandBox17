import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {TeeTimesService} from '../service/tee-times.service';
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-tee-times',
  standalone: true,
  imports: [ReactiveFormsModule, NgForOf, NgIf],
  templateUrl: './tee-times.component.html',
  styleUrl: './tee-times.component.scss'
})
export class TeeTimesComponent {
  teeTimeForm: FormGroup;
  results: any[] = [];
  loading = false;
  error: string | null = null;

  constructor(private fb: FormBuilder, private teeTimesService: TeeTimesService) {
    this.teeTimeForm = this.fb.group({
      zip: ['']
    });
  }

  searchTeeTimes() {
    this.loading = true;
    this.error = null;
    this.results = [];
    const zip = this.teeTimeForm.value.zip;
    this.teeTimesService.findTeeTimes(zip).subscribe({
      next: (data) => {
        this.results = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error fetching tee times.';
        this.loading = false;
      }
    });
  }
}

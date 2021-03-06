import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  imports: [MatButtonModule, MatToolbarModule,MatIconModule,MatCardModule,MatStepperModule,
  MatFormFieldModule,FormsModule, ReactiveFormsModule,MatInputModule,MatSelectModule,
  MatCheckboxModule,MatListModule,MatGridListModule,MatSidenavModule,MatExpansionModule,
  MatMenuModule,MatTabsModule,MatTableModule,MatDatepickerModule,MatNativeDateModule,
  MatRadioModule,MatTooltipModule

  ],
  exports: [MatButtonModule, MatToolbarModule,MatIconModule,MatCardModule,MatStepperModule,
  MatFormFieldModule,FormsModule, ReactiveFormsModule,MatInputModule,MatSelectModule,
  MatCheckboxModule,MatListModule,MatGridListModule,MatSidenavModule,MatExpansionModule,
  MatMenuModule,MatTabsModule,MatTableModule,MatDatepickerModule,MatNativeDateModule,
  MatRadioModule,MatTooltipModule
  
  ],
})
export class MaterialModule { }
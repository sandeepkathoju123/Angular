import { NgModule } from '@angular/core';

import { MatButtonModule,
  MatProgressSpinnerModule,
   MatListModule,
    MatSelectModule,
    MatCardModule,
     MatTabsModule,
      MatToolbarModule,
       MatSidenavModule,
        MatFormFieldModule,
         MatInputModule,
          MatDatepickerModule, 
          MatNativeDateModule, 
          MatCheckboxModule, 
          MatIconModule, 
          MatDialogModule, 
          MatTableModule, 
          MatSortModule, 
          MatPaginatorModule, 
          MatSnackBarModule } from '@angular/material';

const exportedMatModules=[
  MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatSnackBarModule,
    

]

@NgModule({
  declarations: [],
  imports: [
    ...exportedMatModules

  ],
  exports: [ 
    ...exportedMatModules
    
    
  ]
})
export class MaterialModule { }

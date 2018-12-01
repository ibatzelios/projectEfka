import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService, } from 'ngx-bootstrap';
import { searchAppointmentModel } from '../../models/searchAppointmentModel';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { UserService } from 'src/app/services/user.service';
import { dateAdjustment } from '../../helperFunctions/dateAdjustment';
import { MatDialog } from '@angular/material/dialog';
import { NewappointmentdialogComponent } from 'src/app/dialogs/userdialogs/newappointmentdialog/newappointmentdialog.component';
import { AlertdialogComponent } from 'src/app/dialogs/userdialogs/alertdialog/alertdialog.component';



@Component({
  selector: 'app-user-homepage',
  templateUrl: './user-homepage.component.html',
  styleUrls: ['./user-homepage.component.css'],
})
export class UserHomepageComponent implements OnInit {
  noResults = false;
  loading = false;
  datePickerConfig: Partial<BsDatepickerConfig>;


  docSpecialty: any;
  docName: any;
  selectedSpe: any;
  doctorId: any;

  modalRef: BsModalRef;
  appointment: any;
  searchAppointmentModel: searchAppointmentModel[] = [];

  constructor(private router: Router, private modalService: BsModalService, private userService: UserService, public dialog: MatDialog) {
    this.datePickerConfig = Object.assign({}, {
      containerClass: 'theme-blue',
      showWeekNumbers: false,
      minDate: new Date()
    });
  }
  
  openNewAppointmentDialog() {
    const dialogRef = this.dialog.open(NewappointmentdialogComponent, {
      height: '900px',
      width: '650px',
      maxWidth: '98%',
      maxHeight: '98%',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        const dialogRef = this.dialog.open(AlertdialogComponent, {
          data: {
            'color' : 'green',
            result: result
          }
        });
      }
    });
  }


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
  }
  setDoctorsSpecialtys() {
    this.userService.getDoctorsSpecialtys().subscribe((data) => {
      this.docSpecialty = data;

    });
  }
  selectedDoctorSpecialty(event: any) {
    var selectedSpe = event.target.value;
    var id;
    for (let i = 0; i < this.docSpecialty.length; i++) {
      if (selectedSpe == this.docSpecialty[i].name) {
        id = this.docSpecialty[i].id;
      }
    }
    this.userService.getDoctorsNames(id).subscribe((data) => {
      this.docName = data;
    });
  }

  // newAppointment(appointmentForm: NgForm) {
  //   this.loading = true;
  //   var id;
  //   for (let i = 0; i < this.docName.length; i++) {
  //     if (appointmentForm.value.doctorName == this.docName[i].lastName) {
  //       id = this.docName[i].id;
  //     }
  //   }

  //   var finalTime = timeAdjustment(appointmentForm.value.appointmentTime);
  //   var finalDate = dateAdjustment(appointmentForm.value.appointmentDate);

  //   let newAppointment: appointment = {
  //     doctorId: id,
  //     date: finalDate,
  //     time: finalTime,
  //     illness: appointmentForm.value.description,
  //     comments: appointmentForm.value.remarks
  //   };
  //   this.userService.setNewAppointment(newAppointment).subscribe(res => {
  //     this.loading = false;

  //   }, error => {
  //     this.loading = false;

  //   });
  //   appointmentForm.reset();
  //   this.modalRef.hide();
  // }
  searchAppointment(searchForm) {
    this.loading = true;

    var speId;
    for (let i = 0; i < this.docSpecialty.length; i++) {
      if (searchForm.value.doctorSpecialty == this.docSpecialty[i].name) {
        speId = this.docSpecialty[i].id;
      }
    }
    var dateFrom = dateAdjustment(searchForm.value.appointmentDate[0]);
    var dateTo = dateAdjustment(searchForm.value.appointmentDate[1]);
    let searchAppointments: searchAppointmentModel = {
      specialtyId: speId,
      dateFrom: dateFrom,
      dateTo: dateTo
    };

    this.userService.getFilteredAppointments(searchAppointments.specialtyId,
      searchAppointments.dateFrom, searchAppointments.dateTo)
      .subscribe(data => {
        if(Object.keys(data).length === 0 ){
          this.noResults = true;
        }
        this.appointment = data;
        this.loading = false;

      }, error => {
        this.loading = false;

      });

  }

  ngOnInit() {
   }
}


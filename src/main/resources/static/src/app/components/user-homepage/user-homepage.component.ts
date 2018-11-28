import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService, } from 'ngx-bootstrap';
import { NgForm } from '@angular/forms';
import { appointment } from '../../models/appointment';
import { searchAppointmentModel } from '../../models/searchAppointmentModel';
import { doctorModel } from '../../models/doctorModel';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { UserService } from 'src/app/services/user.service';
import { dateAdjustment } from '../../helperFunctions/dateAdjustment';
import { timeAdjustment } from '../../helperFunctions/timeAdjustment';
import { MatDialog } from '@angular/material/dialog';
import { NewappointmentdialogComponent } from 'src/app/dialogs/userdialogs/newappointmentdialog/newappointmentdialog.component';
import { AlertdialogComponent } from 'src/app/dialogs/userdialogs/alertdialog/alertdialog.component';

// interface DocSpecialty {
//   name: String;
// }

@Component({
  selector: 'app-user-homepage',
  templateUrl: './user-homepage.component.html',
  styleUrls: ['./user-homepage.component.css']
})
export class UserHomepageComponent implements OnInit {
  // mytime: Date;
  loading = false;
  datePickerConfig: Partial<BsDatepickerConfig>;


  docSpecialty: any;
  docName: any;
  selectedSpe: any;
  doctorId: any;

  modalRef: BsModalRef;
  appointment: any;
  searchAppointmentModel: searchAppointmentModel[] = [];
  loggedUser: any;
  username: any;

  constructor(private router: Router, private modalService: BsModalService, private userService: UserService, public dialog: MatDialog) {
    this.datePickerConfig = Object.assign({}, {
      containerClass: 'theme-blue',
      showWeekNumbers: false,
      minDate: new Date()
    });
  }
  openNewAppointmentDialog() {
    const dialogRef = this.dialog.open(NewappointmentdialogComponent, {
      // width: '50%'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        const dialogRef = this.dialog.open(AlertdialogComponent, {
          data: {
            result: result
          }
        });
      }
    });
  }


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
  }
  // Need testing and be added in the new appointment button && to the search appointment button
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

  newAppointment(appointmentForm: NgForm) {
    this.loading = true;
    var id;
    for (let i = 0; i < this.docName.length; i++) {
      if (appointmentForm.value.doctorName == this.docName[i].lastName) {
        id = this.docName[i].id;
      }
    }

    var finalTime = timeAdjustment(appointmentForm.value.appointmentTime);
    var finalDate = dateAdjustment(appointmentForm.value.appointmentDate);

    let newAppointment: appointment = {
      doctorId: id,
      date: finalDate,
      time: finalTime,
      illness: appointmentForm.value.description,
      comments: appointmentForm.value.remarks
    };
    this.userService.setNewAppointment(newAppointment).subscribe(res => {
      this.loading = false;

    }, error => {
      this.loading = false;

    });
    appointmentForm.reset();
    this.modalRef.hide();
  }
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
        this.appointment = data;
        this.loading = false;

      }, error => {
        this.loading = false;

      });

  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/home']);
  }

  ngOnInit() {
    this.userService.getLastName().subscribe((data)=>{
      this.username = data;
      this.loggedUser = this.username.lastName;
    });
   }
}


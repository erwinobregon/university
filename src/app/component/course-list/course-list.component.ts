import { Component, OnInit, OnDestroy } from '@angular/core';
import { CourseService } from 'src/app/service/course.service';
import { Course } from '../../domain/course';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit, OnDestroy {
  public course: Course[];
  public subCourse: Subscription;

  constructor(public courseService: CourseService) { }
  ngOnDestroy(): void {
    this.subCourse.unsubscribe();
  }

  ngOnInit(): void {
    this.getAll();
  }

   getAll() {
    this.subCourse= this.courseService.getAll().subscribe(data=>{
      this.course=data;
    });
  }
}

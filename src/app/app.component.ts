import { Component } from '@angular/core';
import { TaskService } from './task.service';
import { Task } from './task.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    taskList: Task[] = [];
    isLoading: boolean = false;

    constructor(private taskService: TaskService) {
        this.loadTasks();
    }
    loadTasks(): void {
        this.isLoading = true;
        this.taskList = this.taskService.getTasks();
        this.isLoading = false;
    }
}
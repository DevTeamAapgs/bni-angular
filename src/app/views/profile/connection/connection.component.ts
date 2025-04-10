import { Component } from '@angular/core';
import { connectionsData } from './data';
import { CommonModule } from '@angular/common';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-connection',
  standalone: true,
  imports: [CommonModule, NgbNavModule, RouterModule, FormsModule],
  templateUrl: './connection.component.html',
})
export class ConnectionComponent {
  allConnectionsData = connectionsData;
  activeTab = '1';
  isSpinner = true;
  connections = connectionsData;

  categories = ['Engineering', 'Design', 'Marketing', 'Product']; // Sample categories
  selectedCategory = '';
  searchTerm = '';

constructor(private route:ActivatedRoute){}


  ngOnInit(): void {
    this.route.queryParams.subscribe((data:any)=> {
      console.log(data,"DATAAA");
      if(data && data.go_to_new_members){
        this.activeTab = '3'
      }
    })
  
  }


  filteredRequests(data: any[]) {
    return data.filter(item => {
      const matchesCategory = this.selectedCategory ? item.category === this.selectedCategory : true;
      const searchLower = this.searchTerm.toLowerCase();
      const matchesSearch =
        item.name.toLowerCase().includes(searchLower) ||
        item.email.toLowerCase().includes(searchLower);
      return matchesCategory && matchesSearch;
    });
  }


  // Dummy filtering for demo; replace with actual filtering logic
  get followingData() {
    return this.connections.filter(c => c.type === 1);
  }
  get followersData() {
    return this.connections.filter(c => c.type === 2);
  }
  get newMembersData() {
    return this.connections.filter(c => c.type === 3);
  }
  get requestsData() {
    return this.connections.filter(c => c.type === 4);
  }

  trackByFn(index: number, item: any) {
    return item.id;
  }

  loadMore() {
    this.isSpinner = true;
    // Simulate loading data...
    setTimeout(() => {
      this.isSpinner = false;
    }, 1000);
  }

  trackByIndex(index: number, item: any): number {
    return index;
  }
  
  loadMoreConnections() {
    this.isSpinner = true;
    // Simulate async call
    setTimeout(() => {
      // Append more data logic here
      this.isSpinner = false;
    }, 20000);
  }

}

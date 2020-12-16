import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { ITicket } from '../models/iticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  url:string = `${baseUrl}`;

  constructor(private http:HttpClient) { }

  public getAllTicketsSrvs():Observable<any> {

    return this.http.get(this.url + `/getAllTickets`);
  }

  public saveTicketSrvs(tkt:ITicket) {
    return this.http.post(this.url + `/saveTicket`, tkt);
  }

  public updateTicketSrvs(tkt:ITicket) {
    return this.http.post(this.url + `/updateTicket`, tkt);
  }

  public deleteTicketSrvs(tktId: number): Observable<any> {
    return this.http.delete(this.url + `/deleteTicket/${tktId}`);
  }
}

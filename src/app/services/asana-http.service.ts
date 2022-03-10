import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AsanaTeamMemberForList, GetAsanaProjectResponse, GetAsanaSectionsResponse, GetAsanaTeamMembersResponse } from '../interfaces/asana.interface';

@Injectable()
export class AsanaHttpService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getAsanaProjects(personalAccessTokenFormControl: string): Observable<GetAsanaProjectResponse> {
    const url = "https://app.asana.com/api/1.0/projects"
    const headers = {
      Authorization: `Bearer ${personalAccessTokenFormControl}`
    }
    return this.httpClient.get<GetAsanaProjectResponse>(url, {headers})
  }

  getAsanaSections(personalAccessTokenFormControl: string, projectGid: string): Observable<GetAsanaSectionsResponse> {
    const url = "https://app.asana.com/api/1.0/projects/{project_gid}/sections".replace("{project_gid}", projectGid)
    const headers = {
      Authorization: `Bearer ${personalAccessTokenFormControl}`
    }
    return this.httpClient.get<GetAsanaSectionsResponse>(url, {headers})
  }

  getTeamMemberShip(personalAccessTokenFormControl: string): Observable<GetAsanaTeamMembersResponse> {
    const url = "https://app.asana.com/api/1.0/users"
    const headers = {
      Authorization: `Bearer ${personalAccessTokenFormControl}`
    }
    return this.httpClient.get<GetAsanaTeamMembersResponse>(url, {headers})
  }

}

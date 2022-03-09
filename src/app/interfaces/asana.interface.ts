export interface AsanaProjectForList {
  gid: string;
  name: string;
  resource_type: string
}

export type GetAsanaProjectResponse  = {
  data: AsanaProjectForList[]
}

export interface AsanaSectionForList {
  gid: string
  resource_type: string
  name: string
}

export type GetAsanaSectionsResponse = {
  data: AsanaSectionForList[]
}
